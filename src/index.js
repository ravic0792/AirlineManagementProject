const express =require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig')

const CityRepository=require('./repository/city-repository');

const setUpAndStartServer=async()=>{

    const app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        const repo= new CityRepository()
        repo.createCity({name:"Amritsar"});
    })
     
}
setUpAndStartServer();
