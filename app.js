const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path=require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");



app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));

main()
.then((res)=>{
    console.log("Server is connected");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/CozyBee");
}


//index route
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/newListing.ejs");
})


//show route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//edit route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//newlistings
app.post("/listings",async (req,res)=>{
   // let {title,description,image,price,location,country}=req.body;
   let listing = req.body.listing;
   const newListing =  new Listing(listing);
   await newListing.save();
   res.redirect("/listings");
})

//edit and update
app.put("/listings/:id",async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstructing
    res.redirect(`/listings/${id}`);
})

//delete route
app.delete("/listings/:id",async (req,res)=>{
    let {id}=req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
    res.redirect ("/listings");
})

// app.get("/testListing",async (req,res)=>{
//     const sampleListing = await new Listing({
//         title : "My Resort",
//         discription: "Beach view",
//         price : 2000,
//         location : "Goa",
//         Country : "India",
//     });

//     sampleListing.save();
//     res.send("Successful")
// });

app.get("/",(req,res)=>{
    res.send("Page is working");
});
 
app.listen(8080,()=>{
    console.log("Server is running 8080");
});