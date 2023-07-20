const dotenv=require("dotenv")
const express = require("express");
const app = express();
const User=require("./db/users")
var cookieParser = require('cookie-parser')
dotenv.config({ path: './config.env' })
const port = process.env.PORT || 5000;
require("./db/conn")
const path = require("path");
var cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(cookieParser())
// we link the router
app.use(require("./router/auth"));

// to host website on same server

// app.use(express.static(path.join(__dirname, "../frontend/build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
// })

app.listen(port, () => {
    console.log(`listening on ${port}`);
})