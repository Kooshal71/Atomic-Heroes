const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Kushal:Kevin123@cluster0.hfrmy.mongodb.net/Customers", {useNewUrlParser:true}, {useUnifiedTopology:true})

const notesScheme = {
    name: String,
    email: String,
    content: String
}

const Note = mongoose.model("Note", notesScheme);

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    let newNote = new Note({
        name:req.body.Name,
        email:req.body.emailId,
        content:req.body.query
    })
    newNote.save();
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("Server is Running");
})
