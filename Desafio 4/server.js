const express = require('express');
const app = express();
const port = 8080;
const rutas = require('./src/routes/index.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/public'));

app.use('/api/productos', rutas);

app.listen(port, (err) => {
    if (err) {
        return console.log('ha ocurrido un error:' + err)
    }else{
        console.log(`Servidor escuchando puerto: ${port}`)
    }
})

