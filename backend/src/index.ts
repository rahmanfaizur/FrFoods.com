import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to MongoDB database!");
    //! This is done to help debugging the code later!
})
const app = express();
app.use(express.json());  //? this is a middleware for converting the request body to json
app.use(cors());

app.get("/test", async (req, res) => {
    res.json({
        message: "Hello Backend!"
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})