const { connect }=require('mongoose');
const Image=require('./models/image')

const mongodb = require('mongodb').MongoClient;
const uri = 'mongodb+srv://root:brayan98@cluster0.vbjahf5.mongodb.net/?retryWrites=true&w=majority';

(async() => {
    

     try{
    const db =await connect("mongodb+srv://root:brayan98@cluster0.vbjahf5.mongodb.net/?retryWrites=true&w=majority");
   ///const db =await connect("mongodb://localhost/usuarios");
       
       let Nombre=await Image.findById('64088f4607f28a055f0c32b6').lean()
      
   
   console.log("db connected"+Nombre.nombre);

          
        

     }catch(error){
        console.error(error);

        
     }
})()
