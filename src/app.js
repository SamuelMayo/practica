import express from 'express';
import sequelize from './database/db.js';

// settings
const app = express();
const PORT = process.env.PORT || 8080;


// Start server
const server = app.listen(PORT,()=>{
    console.log(`listening in PORT ${PORT}`)


    sequelize.sync({forec:true}).then(()=>{
        console.log('DB conected');
    }).catch(err=>{
        console.log(`Erro: ${err}`);
    })
})
