import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import token from "../utils/token.js";




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
    const accessToken = token.generateAccessToken(user._id)
const refreshToken = token.generateRefreshToken(user._id)


return{
    user,
    accessToken,
    refreshToken,
  };
}

//Login Api

const login = async({email, password}) =>{
     const user = await User.findOne({email})

     if(!user) {
        throw new Error("Invalid email or password");
     }

     const isPasswordValid = await bcrypt.compare(
        password,
        user.password
     )
       if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }
    const accessToken = token.generateAccessToken(user._id);
  const refreshToken = token.generateRefreshToken(user._id);

  return {
    user,
    accessToken,
    refreshToken,
  };
}

const getMe = async(userId) =>{
    const user = await User.findById(userId).select(-password)
     if (!user) {
    throw new Error("User not found");
  }

  return user;
}

const refresh = async(refreshToken) =>{
    const decoded = token.verifyRefreshToken(refreshToken)
    const accessToken = token.generateAccessToken(decoded.userId)
     return {
    accessToken,
  };
}



export default {
    register,
    login,
    getMe,
    refresh,
}