const express = require('express');
const app = express();
const port = process.env.PORT | 3000;

app.get('/', async(req, res)=>{
    res.send('hello world');
});

app.get('/cats', async(req, res)=>{
    res.send('cat page');
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})