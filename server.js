const express = require('express');
const app = express();
const {router} = require('./routes');
require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});