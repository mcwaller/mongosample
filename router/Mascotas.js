const express = require('express')
const router = express.Router()

const Apartamento = require('../models/directions')

router.get('/', async (req,res)=>{
    
    //let nombre = [], summary = []
    try {
        const arrayDepartamento = await Apartamento.find()
        console.log(arrayDepartamento)

        res.render("mascotas",{
            arrayMascotas:arrayDepartamento
        })
        
    } catch (error) {
        console.log(error)
    }
    

})
module.exports = router