import nodemailer from 'nodemailer';
import User from '../models/users';
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import config from '../../config/config'

const pool = config.pool;

const passportMechanism = {
  encryptPassword : (password, salt)=>{
    return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
  },
  makeSalt: ()=>crypto.randomBytes(16).toString('hex')
}

const create = async (req, res, next)=>{
     let email = req.body['email'],
         password_salt = passportMechanism.makeSalt(),
         account_type = 0,
         password_hash = passportMechanism.encryptPassword(req.body['password'], password_salt),
         constQuery = "('"+email+"','"+password_hash+"','"+password_salt+"',"+account_type+")";
     try{
        const data = await pool.query("INSERT INTO users (email, password_hash, password_salt, account_type) VALUES "+constQuery);
        res.status(201).json({
              data: data.rows
        });
      }catch(err){
        res.status(400).send({
            error: constQuery
        })
      }
}

const signin = async (req, res)=>{
      let email = req.body['email'],
          password = req.body['password'];
      try{
        const user = await pool.query("SELECT id, email, password_hash, password_salt FROM users WHERE email='"+email+"'");
        if(!user){
           throw new Error("user does not exist");
        }
        if(passportMechanism.encryptPassword(password, user.rows[0]['password_salt'])!==user.rows[0]['password_hash']){
           throw new Error("wrong password");
        }
        const token = jwt.sign({ id: user.rows[0]['id'] }, config.JWT_SECRET, {
                      expiresIn:  86400// 86400 expires in 24 hours
        });
        res.status(200).json({
            data: {
               token,
               data: user.rows[0]['email'],
               iat: Date.now(),
               auth: true
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
            res.status(200).json({
                 auth: true
            });
      });
}

export default {create,signin, hasAuthorization}
