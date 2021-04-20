const express = require('express');
const router = express.Router();
const roomControler = require('../controllers/rooms.contorller');


router.get('/',(req,res)=>{
   roomControler.getAll(req,res);
}).post('/',(req,res)=>{
   roomControler.create(req,res);
})

module.exports = router;
