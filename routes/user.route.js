const express = require("express");

const UserModel = require("../models/User.model");

require('dotenv').config();

const userController = express.Router();

//POST
userController.post("/create", async(req, res) => {
    const payload = req.body;
    const newData = new UserModel(payload);
    await newData.save();
    
    const results = await UserModel.find()
    res.send(results)
});


//GET
userController.get("/", async(req, res) => {
    const results = await UserModel.find();
    res.send(results)
});


//PATCH
userController.patch("/:note_id", async(req, res) => {
    const {note_id} = req.params;
    const payload = req.body;
   
    const newNote = await UserModel.findOneAndUpdate({_id: note_id}, req.body)
    await newNote.save()

    const result = await UserModel.find()
        // console.log('result:', result)
        res.send(result)
});

//DELETE
userController.delete("/:user_id", async(req, res) => {
    const {user_id} = req.params;

   const data = await UserModel.findOne({_id: user_id})
   
   if(data){
    const deletedData = await UserModel.findOneAndDelete({_id: user_id})
    return res.send({"message": "deletedData data"})
   }
  

   
});

module.exports = userController