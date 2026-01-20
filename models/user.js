
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default; // by default we got function but if we dont keep default then we get object which is wrong.

const userSchema = new Schema({
    email :{
        type : String,
        required : true,
    }
});

userSchema.plugin(passportLocalMongoose);


module.exports= mongoose.model("User", userSchema);