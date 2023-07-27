const express = require('express')
const app = express()

//Depends on hosting site
const port = 3000

//CONEXION A BD
const mongoose = require('mongoose')
const user = 'Luis'//'lecsaenz02'
const pwd = '0123456789'//'zoyWEL7C5GvDF6gp'
const db = 'test1'
const uri =`mongodb+srv://${user}:${pwd}@clus.yi5exca.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(uri,
    {useNewUrlParser:true,useUnifiedTopology:true}
)
    .then(()=>console.log('BD conectada profe!'))
    .catch(e=>console.log(e))

//fetch('http://jsonplaceholder.typicode.com/posts')
//    .then(response => response.json())
//    .then(response => console.log(response))

//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.use(express.static(__dirname + '/public'))

//Rutas Web
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))
//404
app.use((req, res, next)=>{
    res.status(404).render('404',{
        titulo:'404',
        descripcion:'Titulo del sitio web'
    })
})

app.listen(port, ()=>{
    console.log('Servidor en ',port)
})