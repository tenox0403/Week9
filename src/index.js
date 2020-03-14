const express = require('express');
const app = express();
const path = require('path');

//configuracioes
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//middleware

//rutas
/*
app.get('/', (req, res)=>{
    //res.send('ok')
    //res.sendFile(path.join(__dirname, '/views/index.html'))
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, '/views/index.html'))
    res.render('index', {title: 'Primer Sitio'});
})
*/
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server en el puerto', app.get('port'))
});