const express = require('express')
const datastore = require('nedb');
const app = express()

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}))

var db = new datastore('location.db');
db.loadDatabase();

app.get("/api",(req,res)=>{
    db.find({},(err,userdata)=>{
        if(err){res.send(err)}
        console.log(userdata);
        res.json({userdata});
    });
    
})

app.post("/api",(req,res)=>{
   const {name,lat,long} = req.body;
   const timestamp = Date.now()
   db.insert({...req.body,timestamp})
   console.log(req.body);
   res.json({
       status:"success",
       name,
       lat,
       long
   })
})

app.listen(3000,()=>{
    console.log('Server started at 3000...');
})