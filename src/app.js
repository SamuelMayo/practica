import express, { urlencoded } from 'express';
import sequelize from './database/db.js';
import personRouter from './routes/person.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/person',personRouter)

const server = app.listen(PORT, () => {
    console.log(`listening in PORT ${PORT}`)


    sequelize.sync({ force: false }).then(() => {
        console.log('DB conected');
    }).catch(err => {
        console.log(`Erro: ${err}`);
    })
})
