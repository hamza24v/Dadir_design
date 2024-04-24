const { google } = require('googleapis')

const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/photoslibrary.readonly']
)

const photoService = google.photos({ version: 'v1', auth })

async function fetchPhotos(pageSize = 12){
    try{
        const response = await photoService.mediaItems.list({
            pageSize: pageSize
        })
        return response.data.mediaItems
    } catch(error) {
        console.log('Error fetching photos: ', error)
        return [];
    }
}

module.exports = { fetchPhotos }