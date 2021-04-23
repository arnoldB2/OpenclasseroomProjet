const express = require('express')
const app = express();
app.get('/', (req,res)=>{
    res.send("Welcom to API");
})
app.listen(3000, ()=>console.log("serveur lancée au port 3000"));