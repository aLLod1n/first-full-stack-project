import User from "../models/Users.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    
    if (user === null) {
        return res.status(200).json({ "message": "User doesn't exist", "status": "faild" });
    }
    
    return res.status(200).json({ "message": "Welcome to our first app", "status": "success" });
};