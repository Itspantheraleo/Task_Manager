const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')


require("dotenv").config();

require("./connection/conn")
const userApis = require('./controllers/user')
app.use(express.json())
app.use(cors({
    origin: ['https://localhost:5127'],
    credentials: true
}))
app.use(cors())
app.use(cookieParser())




app.get("/", (req, res) => {
    res.send("Hello I'm from Backend");
});

//api's
app.use('/api/v1', userApis)

app.listen(`${process.env.PORT}`, () => {
    console.log(`Server Started at PORT =${process.env.PORT}`);
});
