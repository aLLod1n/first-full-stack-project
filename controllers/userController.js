import User from "../models/Users.js";

export const getUsers = async (req, res) => {
    console.log("huhu");
};

export const addUser = async (req, res) => {
    const email = req.body.email;
    const userExists = await User.findOne({ email });

    if (userExists !== null) {
        return res.status(200).json({ "message": "User already exists", "status": "faild" });
    }

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.pass
    });

    try {
        await user.save();
        return res.status(200).json({ "message": "User added", "status": "success" });
    } catch (error) {
        console.log(error);
        res.status(400);
    }
};