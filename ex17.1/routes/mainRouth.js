
const express = require('express')
const MainController = require('../controllers/mainController')

const router = express.Router()


router.post('/',MainController.addProduct)


module.exports = router