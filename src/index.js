const express =require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig')


const setUpAndStartServer=async()=>{

    const app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
     
}
setUpAndStartServer();
