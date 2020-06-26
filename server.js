var express = require('express');
var app = express();

const hbs = require('hbs');
require('./helpers/helpers');


const port = process.env.PORT || 3000




app.use(express.static(__dirname + '/public'));

// Express HBS 
hbs.registerPartials(__dirname + '/views/partiars');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Angel',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
})


app.get('/data', (req, res) => {
    res.send('Hola data')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
})