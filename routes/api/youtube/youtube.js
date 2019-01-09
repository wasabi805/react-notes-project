// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
//
// router.get('/test' , (req,res)=> res.json({msg: 'users route works'}));
//
// router.get('/users' , (req , res)=>{
//      axios.get('https://jsonplaceholder.typicode.com/users', res ).then(
//          user =>{
//              console.log(user.data, '*******') ;
//              res.send(user.data);
//          }).catch(err=>console.log(err))
//
// });
//
// module.exports = [router, axios];