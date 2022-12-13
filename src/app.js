const express = require('express')
const routes=require('./routes/index.js')

const server=express()
server.use(express.json())
server.use('/',routes)

module.exports=server;