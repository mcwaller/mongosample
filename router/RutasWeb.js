const express = require('express')
const router = express.Router()

//Ruta de inicio
router.get('/',(req, res)=>{
    res.render('index',{titulo:'Home dinamico'})
})

//Servicios
router.get('/servicios',(req, res)=>{
    res.render('servicios', {titservicios:'Mensaje dinamico de Servicios'})
})

module.exports = router