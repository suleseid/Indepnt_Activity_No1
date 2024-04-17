const express = require('express');
const app = express();

const logVisitor = require("./logVisitor");
const getLogFile = require("./readLogFile");
const getSystemInfo = require("./systemInfo");
const path = require("path");

app.get('/', (req, res) =>{
     res.sendFile(path.join(__dirname, "studentInfo.html"));
    //res.send("Hello World");
});
 app.get('/system-info', (req, res) =>{
    res.send(getSystemInfo());
 });

 app.get('/log-visit', (req, res)=>{
    const visit = `Visitor at ${new Date().toISOString()}`;
    logVisitor(visit);
    res.send("Visit Logged");
 });

 app.get('/show-log', (req, res) =>{
    res.send(getLogFile());  
 });

app.get('/query', (req, res) =>{
    res.send(req.query);
    //use to run host http://localhost:3000/query?name=ABCD&Age=123:
});

app.get("/get", (req, res)=>{
    res.send(req.get('Content-Type'));
});

app.listen(3000, () =>{
    console.log(`Now listening on port ${3000}`);
});