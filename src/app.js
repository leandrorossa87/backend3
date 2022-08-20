const path = require('path')

const express = require('express');
const app = express();


//de esta forma ingresa a la carpeta public en el buscargor ponemos
//directamente el archivo sin nombrar la carpeta
app.use(express.static('public'));  


//busqueda de rutas con prefijo
app.use('/busqueda', express.static('publica'));

app.use('/celular', express.static('mobile'));

app.use('/escritorio', express.static('desktop'));

app.get('/', (req, res) => {
    res.send('Bienvenidos a la Pagina Principal')
});


app.listen(3000, ()=> console.log("Proyecto en el puerto 3000"));
