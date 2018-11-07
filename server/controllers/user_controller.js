import User from '../models/users';

const create = async (req, res, next)=>{
     let email = req.body['email'],
         password = req.body['password'];
     const user = new User({ email, password});
     try{
      const result = await user.save();
        res.status(201).json({
             data: result
        })
      }catch(err){
        res.status(400).send({
            error: err
        })
      }
}




export default {create}
