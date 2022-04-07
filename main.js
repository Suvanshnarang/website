const http=require('http')
const fs=require('fs')
const pug=require('pug')
const express =require('express')
const app=express();
const path =require('path')

const port =80;
app.set('view-engine','pug')
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    const title="IIT ROORKEE"
    const par1="this is just a random content "
    const part2="just randm content trying to explore various fields"
    const par={"index":title,"part1":par1,"part2":part2}
    res.status(200).render("main.pug",par)
})
app.get('/about',(req,res)=>{
    res.status(200).render("about.pug")
})
app.get('/contact',(req,res)=>{
    res.status(200).render("contact.pug")
})
app.get('/project',(req,res)=>{
    res.status(200).render("project.pug")
})
app.listen(port,()=>{
    console.log("starting/....")
})



