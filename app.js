import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect("mongodb+srv://bejo:axiosfetch2023@cluster0.rllmr07.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.set("strictQuery", true);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("database connected"));

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', usersRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log('hello we write backend matherfackers');
});
