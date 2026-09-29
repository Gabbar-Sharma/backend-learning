import authService from "../services/auth.service.js";

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: result.user._id,
          name: result.user.name,
          email: result.user.email,
          role: result.user.role,
        },
        accessToken: result.accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

//login controller
const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Login successfully !",
      data: {
        user: {
          id: result.user._id,
          name: result.user.name,
          email: result.user.email,
          role: result.user.role,
        },
        accessToken: result.accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const result = await authService.getMe(req.user.userId);
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: {
        user: {
          id: result._id,
          name: result.name,
          email: result.email,
          role: result.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is required",
      });
    }
    const result = await authService.refresh(refreshToken);
      return res.status(200).json({
        success: true,
        message: "Access token refreshed successfully",
        data: {
          accessToken: result.accessToken,
        },
      });
  } catch (error) {
    next(error);
  }
};

  const logout = async(req, res, next) =>{
    try{
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
      })
      return res.status(200).json({
        success: true,
        message: "Logout Successfully"
      })
    }
    catch(error) {
       next(error) 
    }
  }

export default {
  register,
  login,
  getMe,
  refresh,
   logout,
};
