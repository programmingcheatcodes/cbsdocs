const express = require("express");

const app = express();
const importCorrData = require("./data.json");
const importTranData = require("./transactionentry.json");

let port = process.env.PORT || 3000;

app.get("/",(req, res)=>{
 res.send("Hello World");
});


app.get("/edatacorrector",(req, res)=>{
    res.send(importCorrData);
});

app.get("/etran",(req, res)=>{
    res.send(importTranData);
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});
