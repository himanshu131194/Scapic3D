import jwt from 'jsonwebtoken'
import User from '../models/users'
import config from '../../config/config'

const signin = async (req, res)=>{
      let email = req.body['email'],
          password = req.body['password'];
      try{
        const user = await User.findOne({email});
        if(!user){
           throw new Error("user not exits");
        }
        if(!user.authenticate(password)){
            throw new Error("email and password does not match");
        }
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
                      expiresIn:  86400// 86400 expires in 24 hours
        });
        res.status(200).json({
            data: {
               token, auth: true
            }
        })
      }catch(error){
        res.status(400).json({error: error.message});
        }
}

const hasAuthorization = (req, res, next)=>{
      const token = req.headers['x-access-token'];
      if(!token){
        res.status(400).json({
            auth: false,
            error: 'no token provided'
        });
      }
      jwt.verify(token, config.JWT_SECRET, (err, decoded)=>{
            if(err){
               res.status(400).json({
                   auth: false,
                   error: 'failed to authenticate user'
               });
            }
            req.profile = decoded;
            next();
      })
}

export default {signin, hasAuthorization}
