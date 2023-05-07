
const express = require('express');

const cors = require('cors');

const { connection } = require('./Config/db');

const { qrRouter } = require('./Routes/qr.route');
const { userroute } = require('./Routes/user.route');
const  {queryRouter} = require("./Routes/chatbot.route")
require('dotenv').config();



const app = express();



app.use(express.json());

app.use(cors());

app.use("/user",userroute)

app.use('/qrcode', qrRouter)
app.use("/query",queryRouter)

app.listen(process.env.Port, async (req,res)=>{

    try {

        await connection;

        console.log(`DB connected. `);

    } catch (error) {

        console.log(error);

    }

    console.log(`server is running on port ${process.env.Port}`);
    
})
