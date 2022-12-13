const express = require('express')
const routes=require('./routes/index.js')
const cors =require('cors')

const server=express()

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://proyecto-individual-6c9c.vercel.app");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use(cors())
server.use(express.json())
server.use('/',routes)

module.exports=server;