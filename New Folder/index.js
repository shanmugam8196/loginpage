const express=require('express');
const cors=require('cors');
const mycon=require('mysql');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');
const { response, request } = require('express');

const app=express();
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.static('public'));

const c=mycon.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'shan@123',
    database:'myproject'
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else {
        console.log('Database Connected');
    }
})

app.post('/Adduser',(request,response)=>{
    let {username,email,password}=request.body;
    let sql='insert into signup(username,email,password)values(?,?,?)';
    c.query(sql,[username,email,password],(error,result)=>
    {
        if(error){
            let s={'status':'error'};
            response.send(s);
        }
        else{
            let s={'status':'created'};
            response.send(s);
        }
    })
})

app.post('/getuser/:data',(request,response)=>{
    const username=request.body.username;
    const password=request.body.password;
    c.query("select * from signup where username=? AND password=?",(username,password),
    (error,result)=>{
        if(error){
            console.log(error)
        }
        else {
            if(result){
                response.send(result)
            }
            else{
                response.send({message:"Wrong password"});
            }
        }
    }
    );
})



// app.get('/getuser',(request,response)=>{
//     let sql='select * from signup';
//     // let sql='select * from signup where username={username} and password={password}';

//     c.query(sql,(error,result)=>{
//         if(error){
//             response.send(error);
//         }
//         else{
//             response.send(result);
//         }
//     })
// });

app.listen(3004);