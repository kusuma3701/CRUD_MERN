const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql=require('mysql');
const cors=require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"data_con"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM contact";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});

app.get("/",(req,res)=>{
    // const Insert="INSERT INTO contact (name,email,contact) VALUES ('kusuma','kusu@gmail.com', 3567809880)";
    // db.query(Insert,(err,result)=>{
    //     console.log("error",err);
    //     console.log("result",result);
    //     res.send("Hello Hiiioii");
    // });
    
});

app.listen(5000,()=>{
    console.log("Server is running");
});