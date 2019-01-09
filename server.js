const express = require('express');
const app = express();

const users = require('./routes/api/users/users');

app.get('/', (req, res)=>{
    res.send('Hello, this is the 1st, server route')
});

app.use('/api/users', users);

const port = 5000;
app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});