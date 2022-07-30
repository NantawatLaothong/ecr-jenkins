const express = require('express');
const app = express();
const port = 3000;

app.get('/', async(req, res)=>{
    res.json({
        "msg": "some data"
    })
});

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})