const express = require('express')
const router = express.Router()

router.get('/', (_, response) => {
  response.send('jeez wait a minute before i setup')
})

module.exports = router
