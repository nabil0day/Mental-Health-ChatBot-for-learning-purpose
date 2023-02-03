//CHECKSUM:f9fefcd6be62db5c0d17de20d60f9f3b2c7b64c442118733c8e81dbdf6ed66dc
const axios = require('axios')

async function execute() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId, { studioUrl: true })
    await axios.post('/testing/processedEvent', event, axiosConfig)
  } catch (err) {
    console.log('Error processing', err.message)
  }
}

return execute()
