require('dotenv').config();
const express = require('express');
const cors = require('cors')

const router = require('./router');

const app = express();

const { PORT } = process.env;
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    return res.send('APP is running')
})
app.use('/api',router);


app.listen(PORT,()=>{
    console.log('App is listening at post 4000')
});