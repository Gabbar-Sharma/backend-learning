import User from "../models/user.model";
import bcrypt from 'bcrypt'
import token from "../utils/token";




const register = async ({ name, email, password }) => {
    //logic
    // yeha hum existing user mai dekh rhe h kya humre paas already user h iss email se
    const existingUser = await User.findOne({email})

    if(existingUser) {
     throw new Error("Email already registered");    }

     const hashedPassword = await bcrypt.hash(password, 10)

    const user =await User.create({
        email,
        name,
        password: hashedPassword,
    })
    const accessToken = token.generateAccessToken(User._id)
const refreshToken = token.generateRefreshToken(User._id)


return{
    user,
    accessToken,
    refreshToken,
  };
}

export {
    register
}