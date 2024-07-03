require('dotenv').config()

const fetch = require('node-fetch')
const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: "u42bem90",
    dataset: 'production',
    token: process.env.SANITY_TOKEN,
    useCdn: false
})

const fetchData = async (endPoint) => {
    const response = await fetch(`${process.env.API_URL}/${endPoint}`)
    const data = await response.json()
    return data
}

const transformData = (data, type) => {
    return data.map(item => {
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
                image: item.image,
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
                imageUrl: item.imageUrl,
                description: item.description
            }
        }
    })
}

const importData = async () => {
    const services = await fetchData('services')
    const bookings = await fetchData('bookings')
    const gallery = await fetchData('gallery')

    const servicesDoc = transformData(services, 'services')
    const bookingsDoc = transformData(bookings, 'bookings')
    const galleryDoc = transformData(gallery, 'gallery')

    // services
    let servicesTransaction = client.transaction()
    servicesDoc.forEach(doc => {
        servicesTransaction.createOrReplace(doc)
    })
    await servicesTransaction.commit()
    console.log("services imported")

    //bookings
    let bookingsTransaction = client.transaction()
    bookingsDoc.forEach(doc => {
        bookingsTransaction.createOrReplace(doc)
    })
    await bookingsTransaction.commit()
    console.log("bookings imported")

    //gallery
    let galleryTransaction = client.transaction()
    galleryDoc.forEach(doc => {
        galleryTransaction.createOrReplace(doc)
    })
    await galleryTransaction.commit()
    console.log("gallery imported")
}

importData().catch(err => {
    console.error('Import failed: ', err);
  });