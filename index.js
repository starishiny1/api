const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
const importData = require(data.json);



app.get("/", (req,res)=>{
    res.send("Hello World")
});

app.get("/websites", (req,res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
});