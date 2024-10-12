//npm init

import express from "express";

//MongoDB
import mongoose, { connect } from "mongoose";

//To 
import bodyParser from "body-parser";
import User from "./models/user.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectDB = async () => {
  try{
      const conn = await mongoose.connect("mongodb+srv://<userName>:<password>@cluster0.qhjdo.mongodb.net/test");
      console.log(`MongoDB Connected`)
  }
  catch(error){
      console.log("Error connecting to database")
      process.exit(1);
  }
};
//Create Schema
connectDB();
const port = 5000;

app.post("/createUser",async (req,res)=> {
  const data = req.body;
  const user = await User.create(data);
  res.status(200).json(user);
})


app.listen(port, () => console.log(`Server running on port ${port}`));
