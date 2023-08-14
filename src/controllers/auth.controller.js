import User from "../models/auth.models.js"
import bcrypt from "bcryptjs"


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: passwordHash,
        })
        const userSaved = await newUser.save();
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdat: userSaved.createdAt,
            updatedat: userSaved.updatedAt
        })

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;


    const userFound = await User.findOne({ email: email });
    if (!userFound) {
        res.status(401).json({ message: "Incorrect Email" });
    }
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
        res.status(401).json({ message: "Incorrect password" });
    }
    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdat: userFound.createdAt,
        updatedat: userFound.updatedAt
    })
}