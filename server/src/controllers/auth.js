import { User } from "../db"
import logger from "../logger"
import { hashPassword } from "../utils/auth.utils"
import { generateResetToken, verifyResetToken } from "../utils/token"

//SignUp Controller
export const signup = async (req, res, next) => {
    try {
        //body
        //Validate data
        const { firstName, lastName, email, password, phone, profilePicture } = req.body;
        //check user exists in DB
        //First schema is created then a model is created to manipulate the data
        //Find returns an error while findOne returns the user
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
                data: null,
            })
        }
        //hash the password
        const hashPassword = await hashPassword(password)

        //Create a new user 
        const createdUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            phone,
            profilePicture,
        })
        return res.status(201).json({
            message: "User created successfully",
            success:true,
            data:createdUser,
        })
    }
    catch (error) {
        logger.error(error)
        return res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        // check if user exists in the DB
        let userExists = true
        if (!userExists) {
            return res.status(400).json({
                message: "User does not exist",
                success: false,
                data: null
            })
        }
        // generate a token and send email
        const token = generateResetToken({
            email: "abc@mail.com"
        })
        const resetPasswordLink = `http://localhost:3000/reset-password/${token}`
        // send the email
        return res.status(200).json({
            message: "Reset password link sent to email",
            success: true,
            data: null
        })

    } catch (error) {
        logger.error(error)
        return res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const changePassword = async (req, res, next) => {
    try {
        const { password } = req.body
        const { token } = req.params
        // verify the token
        const payload = verifyResetToken(token)
        if (!payload) {
            return res.status(400).json({
                message: "Invalid or expired token",
                success: false,
                data: null
            })
        }
        const { email } = payload
        const user = {}
        //! redundant code
        if (!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false,
                data: null
            })
        }
        // update the password
        const hashEdPassword = "hashed password"
        user.password = hashEdPassword
        // save the user
        // send email
        return res.status(200).json({
            message: "Password updated successfully",
            success: true,
            data: null
        })

    } catch (error) {
        logger.error(error)
        return res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}