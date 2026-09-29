import UserModel from "../models/user.model";
import bcrypt from 'bcrypt'
import token from "../utils/token";


const accessToken = token.generateAccessToken(user._id)
const refreshToken = token.generateRefreshToken(user._id)