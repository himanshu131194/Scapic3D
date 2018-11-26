import nodemailer from 'nodemailer';
import User from '../models/users';
import jwt from 'jsonwebtoken'
import config from '../../config/config'


const sendEmailVerification = (to, otp)=>{
  const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
             user: 'sunnysavita18@gmail.com',
             pass: 'ARGON123#love'
         }
  });
  const mailOptions = {
    from: config.EMAIL.OWNER,
    to: 'sunnysavita18@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `That was easy! OTP - ${otp}`
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const generateOTP = ()=>{
      return Math.floor((Math.random() * 999999) + 100000);
}

const create = async (req, res, next)=>{
     let email = req.body['email'],
         password = req.body['password'],
         otp = generateOTP();
     console.log(email);
     const user = new User({ email, password, authId: otp});
     try{
      const result = await user.save();
      sendEmailVerification(email, otp);
      res.status(201).json({
             data: result['email']
      })
      }catch(err){
        res.status(400).send({
            error: err
        })
      }
}

const verifyOTP = async (req, res, next)=>{
   let email = req.body['email'],
       otp = req.body['otp'];
   try{
      const user = await User.findOne({email: email, authId: otp});
      let token = null;
      if(user){
         token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
                      expiresIn:  86400// 86400 expires in 24 hours
         });
      }
      res.status(200).json({
          data: {
             token,
             user,
             iat: Date.now(),
             auth: true
          }
      })
   }catch(error){
     res.status(400).send({
         error: error.message
     })
   }

}



export default {create, verifyOTP}
