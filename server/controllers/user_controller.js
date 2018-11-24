import nodemailer from 'nodemailer';
import User from '../models/users';
import config from '../../config/config'


const sendEmailVerification = (to)=>{
  const transporter = nodemailer.createTransport({
         service: 'verio',
         auth: {
             user: 'himanshu@freshersworld.in',
             pass: 'Cassius73fw@'
         }
  });
  const mailOptions = {
    from: config.EMAIL.OWNER,
    to: 'himanshu@freshersworld.in',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


const create = async (req, res, next)=>{
     let email = req.body['email'],
         password = req.body['password'];
     console.log(email);
     const user = new User({ email, password});
     try{
      const result = await user.save();
      sendEmailVerification(email);
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
