const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;
const data = require("./data.json");

app.get('/',(req,res)=>{
    res.send(data)
})


app.listen(port,()=>{
console.log("I am live")
})