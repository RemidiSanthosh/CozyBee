const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/CozyBee";
main()
.then((res)=>{
    console.log("Server is connected");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner: "6960a6e7692b5212c75b8717"}));
    await Listing.insertMany(initData.data);
    console.log("Data was saved");
};

initDB();

