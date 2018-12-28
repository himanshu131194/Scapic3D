import auth from './auth_controller';
import Resume from '../models/resume';
import requestPromise from 'request-promise';

const create = (req, res)=>{
      res.send({
          id: req.profile
      })
}

const createResume = (req, res, next)=>{
      // const resume = new Resume()
      console.log(req.body);
       res.send({
          data: "Himanshu"
       })
}

const listProducts = async (req, res, next)=>{
      const data = await requestPromise({
           uri :'https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json',
           json:true
      });
      res.json({data});
}

export default {create, createResume, listProducts}
