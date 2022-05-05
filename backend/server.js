require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (_, response) => {
  response.send('Welcome to Feedback and suggestions API')
})

app.use('/api/feedbacks', require('./routes/feedback'))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
