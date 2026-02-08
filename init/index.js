// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/CozyBee";
// main()
// .then((res)=>{
//     console.log("Server is connected");
// })
// .catch((err)=>{
//     console.log(err);
// });

// async function main(){
//     await mongoose.connect(MONGO_URL);
// };

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj,owner: "6960a6e7692b5212c75b8717"}));
//     await Listing.insertMany(initData.data);
//     console.log("Data was saved");
// };

// initDB();

require("dotenv").config({ path: "../.env" });

console.log("MONGO_URL from env:", process.env.MONGO_URL);
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");
const data = require("./data");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB connected");

  // clean database
  await Listing.deleteMany({});
  await User.deleteMany({});

  // create default user (passport-local-mongoose)
  const owner = new User({
    username: "santhosh",
    email: "remidisanthosh@gmail.com",
  });

  const registeredUser = await User.register(owner, "santhosh");

  // attach owner to each listing
  const listingsWithOwner = data.map(listing => ({
    ...listing,
    owner: registeredUser._id,
  }));

  // insert listings
  await Listing.insertMany(listingsWithOwner);

  console.log("User + Listings seeded successfully");
  process.exit();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
