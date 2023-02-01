const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
     image: {type: String, required: true},
     content: {type: String, required: true},
});

const UserModel = mongoose.model("userInfo", userSchema);

module.exports = UserModel;