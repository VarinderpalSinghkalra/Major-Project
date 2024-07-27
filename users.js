const express = require('express');
const UserRegister= require('../model/reg');
const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/signin',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    UserRegister.findOne({
        email:email,
        password:password
    },
    (err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log(user);
            if(user == null ){
              res.json({message:"Check your Credentials"});
            }
            else if (user.password != password){
                res.json({message:"Check your password"});
            }
            else{
                res.json(user);
            }
        }
    })
})


router.post('/addRegister',function(req,res){
    const email=req.body.email
    const password=req.body.password
    const Fname=req.body.Fname
    const Lname=req.body.Lname
    const address=req.body.address
    const address2=req.body.address2
    const city=req.body.city
    const state=req.body.state
    const weight=req.body.weight
    const height=req.body.height
       
    new UserRegister({
        email:email,
        password:password,
        Fname:Fname,
        Lname:Lname,
        address:address,
        address2:address2,
        city:city,
        state:state,
        weight:weight,
        height:height
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        city : req.body.city,
        address : req.body.address,
        weight : req.body.weight,
        height : req.body.height


    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;