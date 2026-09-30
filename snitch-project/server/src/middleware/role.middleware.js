const roleMiddleware  = (...allowedRolles) =>{
    return (req, res, next) =>{
        if(!req.user) {
             return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
        }

    //allowedROles
    if(!allowedRolles.includes(req.user.role))
         return res.status(403).json({
        success: false,
        message: "You are not allowed to perform this action",
      });
        // end
         next();
    }
}

export default roleMiddleware;