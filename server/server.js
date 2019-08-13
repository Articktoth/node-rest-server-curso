require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

//mongoose
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex:true }, (err, res)=>{
    if(err)throw err;
    console.log('Conexión a la base de datos correcta')
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});