import { Router } from "router";
import registerValidator from "../validators/auth.validator";

const router = express.Router()




/** 
 * @POST api/auth/register 
 * @param req express.body
 * @param req.body ={name, email, password}
 * @Response res.status(201) if(successful)
 * */ 


router.post("/api/auth/register", registerValidator, )