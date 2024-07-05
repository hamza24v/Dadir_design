require('dotenv').config()
const {createClient} = require('@sanity/client')
const fs = require("fs")
const path = require('path')
const axios = require('axios')

const client = createClient({
    projectId: "u42bem90",
    dataset: 'production',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
    apiVersion: '2024-07-04'
})

const uploadImage = async (imageUrl) => {
    console.log('imageUrl: ', imageUrl)
    const response = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream'
    })

    const filename = path.basename(imageUrl)
    const tempFilePath = path.join(__dirname, filename) //creates temp file path

    // pipes image stream to a file
    const writer = fs.createWriteStream(tempFilePath)
    response.data.pipe(writer)

    //waits for file to be written
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })

    //upload to sanity
    const imageStream = fs.createReadStream(tempFilePath)
    const asset = await client.assets.upload('image', imageStream, { filename })

    fs.unlinkSync(tempFilePath) //remove temp file
    return asset._id
}

const fetchData = async (endPoint) => {
    console.log("fetching ", endPoint)
    const response = await fetch(`${process.env.API_URL}/${endPoint}`)
    const data = await response.json()
    console.log('data: ', data.length)
    
    for (let item of data){
        if(item.image){
            item.image = await uploadImage(item.image)
            console.log("item.image: ", item.image)
        }
    }
    return data
}

const transformData = (data, type) => {
    return data?.map(item => {
        if(type === 'services'){
            
            return {
                _id: `imported-${item.id}`,
                _type: 'service',
                name: item.name,
                oldPrice: item.oldPrice || null,
                newPrice: item.newPrice || null,
                variations: item.variations ? Object.entries(item.variations).map(([key, value]) => ({
                  name: key,
                  title: key,
                  oldPrice: value.oldPrice,
                  newPrice: value.newPrice
                })) : [],
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: item.image
                    }
                },
                serviceType: item.serviceType
            }
        } else if(type === 'bookings'){
            return {
                _id: `imported-${item.id}`,
                _type: 'booking',
                fullName: item.fullName,
                phoneNumber: item.phoneNumber,
                email: item.email,
                address: item.address,
                dateOfService: item.dateOfService,
                services: item.services,
                message: item.message
            }
        } else if(type === 'gallery'){
            return {
                _id: `imported-${item.id}`,
                _type: 'gallery',
                title: item.title,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: item.imageUrl
                    }
                },
                description: item.description
            }
        }
    })
}

const importData = async () => {
    const gallery  = await fetchData('gallery')
    const services = await fetchData('services')
    const bookings = await fetchData('bookings')
    console.log("bookings: ", bookings)
    const servicesDoc = transformData(services, 'services')
    console.log("transformed services")
    const bookingsDoc = transformData(bookings, 'bookings')
    console.log("transformed bookings")
    const galleryDoc = transformData(gallery, 'gallery')
    console.log("transformed gallery")
    // services
    let servicesTransaction = client.transaction()
    servicesDoc?.forEach(doc => {
        servicesTransaction.createOrReplace(doc)
    })
    await servicesTransaction.commit()
    console.log("services imported")

    //bookings
    let bookingsTransaction = client.transaction()
    bookingsDoc?.forEach(doc => {
        bookingsTransaction.createOrReplace(doc)
    })
    await bookingsTransaction.commit()
    console.log("bookings imported")

    //gallery
    let galleryTransaction = client.transaction()
    galleryDoc?.forEach(doc => {
        galleryTransaction.createOrReplace(doc)
    })
    await galleryTransaction.commit()
    console.log("gallery imported")
}

importData().catch(err => {
    console.error('Import failed: ', err);
  });