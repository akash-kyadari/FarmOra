import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const generateToken = async (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    res.cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
    return token;
}

export const signupRoute = async (req, res) => {
    try {
        //getting email,password,fullname given by user from req object
        const { fullName, email, password } = req.body;
        //checking password is given properly or not
        if (!password) {
            throw new Error("Password is required field");
        } else if (password.length < 8) {
            throw new Error("Password length should be minimum 8.");
        }
        //checking if any user existing with given mail
        const user = await User.findOne({ email })
        if (user) {
            return res.status(409).json({ message: 'user already Exists' })
        }
        //generating salt and hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        //creating new user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })
        //saving user to db
        await newUser.save();
        //generate jwt token  
        generateToken(newUser._id, res)
        //sending response
        res.status(201).json({
            _id: newUser.id,
            fullName: newUser.fullName,
            email: newUser.email,
        })
    } catch (error) {
        //in case any validation error or any error
        res.status(500).json({
            message: error.message
        })
    }
}

export const loginRoute = async (req, res) => {
    try {
        //getting email and password from req object
        const { email, password } = req.body;
        //checking email and password are present
        if (!email || !password) {
            throw new Error(`${!email ? 'email' : 'password'} is required field`);
        }
        //finding an user given mail id
        const user = await User.findOne({ email }).select('+password');
        //checking if an user exists wit given mail id
        if (!user) {
            return res.status(400).json({
                message: "No user Found! please signup"
            })
        }
        //checking wheather the password is right or not
        const isPsswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPsswordCorrect) {
            return res.status(400).json({
                message: "wrong password !!"
            })
        }
        //generating token
        generateToken(user._id, res);
        //sending response
        res.status(200).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email
        })

    } catch (error) {
        //sending response in case any error
        res.status(500).json({
            message: error.message
        })
    }
}

export const logoutRoute = (req, res) => {
    try {
        res.cookie("token", "", { maxAge: 0 });
        res.status(200).json({
            message: "logged out successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Not authenticated" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { userId } = decoded;
        req.user = await User.findOne({ _id: userId });
        if (req.user) {
            next();
        } else {
            throw new Error("No user found");
        }
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            res.json(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};