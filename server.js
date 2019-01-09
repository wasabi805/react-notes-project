const express = require('express');
const app = express();
const path= require('path');

const users = require('./routes/api/users/users');

app.use('/api/users', users);

//Server static if in prod
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});