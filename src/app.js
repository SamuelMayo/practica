import express, { urlencoded } from 'express';
import sequelize from './database/db';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const server = app.listen(PORT, () => {
    console.log(`listening in PORT ${PORT}`)


    sequelize.sync({ forec: true }).then(() => {
        console.log('DB conected');
    }).catch(err => {
        console.log(`Erro: ${err}`);
    })
})
