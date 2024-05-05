const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/router');
app.use(cors());
app.use(express())
app.use(express.json());
mongoose.connect('LINK').then(()=>{  console.log("Database connection sucessfull");
app.listen("PORT",()=>{
    console.log("Server started at post http://localhost:PORT");
})
})
  .catch((error)=>{console.log(error)});

app.use(router);
