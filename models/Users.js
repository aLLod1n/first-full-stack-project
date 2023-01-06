import mongoose from "mongoose";

const user = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    email: String,
    password: String
}, {
    timestamps: true
});

export default mongoose.model("User", user);