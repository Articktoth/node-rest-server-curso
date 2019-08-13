//=============
//  PUERTO
//=============
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base de datos
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB=  'mongodb://localhost:27017/cafe'
}else{
    urlDB= 'mongodb+srv://toto:jo8zdipAPBMeC9WI@nodecurso-kuybu.mongodb.net/test?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;