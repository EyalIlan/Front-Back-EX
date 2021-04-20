
const express = require('express')
const MainController = require('../controllers/mainController')

const router = express.Router()


router.get('/',MainController.getAllProducts)

router.get('/product/:id',MainController.getSpecificProduct)

router.get('/active',MainController.getActiveProducts)


module.exports = router