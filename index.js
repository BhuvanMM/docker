const express = require('express')

const app = express()
const PORT = 9000

app.get('/',(req,res)=>{
    res.send('It is working!')
})

app.listen(PORT,()=> console.log(`server running at port:${PORT}`))