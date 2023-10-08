const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;
const data = require("./data.json");


app.use(function(req,res,next){
next()
})

app.get('/',(req,res)=>{
    res.send(data)
})

app.get('/:id',(req,res)=>{
    const itemId = parseInt(req.params.id)

    const item = data.find((item)=> item.id === itemId)
  res.send(item)  
})

app.get('/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredItems = data.filter((item) => item.cateogory === category);
  
  console.log(res.send(filteredItems))
})



app.listen(port,()=>{
console.log("I am live")
})