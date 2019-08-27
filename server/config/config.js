//=============
//  PUERTO
//=============
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Vencimiento del token
//60segundos
//60minutos
//24horas
//30dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//SEED DE AuteNTICACION
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//base de datos
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB=  'mongodb://localhost:27017/cafe'
}else{
    urlDB= process.env.MONGO_URI;
}

process.env.URLDB = urlDB;



//GOOGLE CLIENT ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '29224828867-a6e85qec4kg7479h88tfpg8d2vnf3mmq.apps.googleusercontent.com';

