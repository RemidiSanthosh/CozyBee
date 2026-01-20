if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


// routes
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

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

const sessionOptions = {
    secret : "mysupersecretsession",
    resave : false,
    saveUninitialized : true,
    cookie:{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

//Home page
app.get("/",(req,res)=>{
    res.send("Page is working");
});


//locals function we can access this any where
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user; //we can access this variables any where
    next();
})

// app.get("/demouser", async (req,res) => {
//     const fakeUser = new User({
//         email : "student@gmail.com",
//         username : "Santhu",
//     });

//     let registeredUser = await User.register(fakeUser, "santhu@01");  //par1 : username and other details, par2 : password.
//     res.send(registeredUser);
// })

//listings -routes
app.use("/listings", listingRouter);

//reviwes -routes
app.use("/listings/:id/reviews", reviewRouter);

//users -routes
app.use("/",userRouter);


app.use((req,res,next)=>{
    next(new ExpressError(404, "Page not found!"));
});

app.use((err,req,res,next)=>{
   let {statusCode =500, message="Something went Wrong!"}= err;
   res.status(statusCode).render("error.ejs",{message});
   //res.status(statusCode).send(message);
});

app.listen(8080,()=>{
    console.log("Server is running 8080");
});