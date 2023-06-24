const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"data_con"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const sqlView="SELECT * FROM contact";
    db.query(sqlView,(error,result)=>{
        res.send(result);
    });
});

app.post("/api/post",(req,res)=>{
    const {name,email,contact} = req.body;
    const sqlInsert="INSERT INTO contact (name,email,contact) VALUES(?,?,?) ";
    db.query(sqlInsert,[name,email,contact],(error,result)=>{
        if(error){
            console.log(error);
        };
    });
});

app.delete("/api/remove/:id",(req,res)=>{
    const {id} = req.params;
    const sqlRemove="DELETE FROM contact WHERE id=? ";
    db.query(sqlRemove,id,(error,result)=>{
        if(error){
            console.log(error);
        };
    });
});

app.get("/api/get/:id",(req,res)=>{
    const {id} = req.params;
    const sqlUpd="SELECT * FROM contact where id=?";
    db.query(sqlUpd,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:id",(req,res)=>{
    const {id} = req.params;
    const {name,email,contact}=req.body;
    const sqlUpdate="UPDATE contact SET name=?,email=?,contact=? WHERE id=?";
    db.query(sqlUpdate,[name,email,contact,id],(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/", (req,res)=>{
    // const sqlInsert="INSERT INTO contact (name,email,contact) VALUES('bun','bun@gmail.com',568758759) ";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log('error',error);
    //     console.log('result',result);
        
    // });
    // res.send("Hii"); 
});

app.listen(5000,()=>{
    console.log("server is runing");
});