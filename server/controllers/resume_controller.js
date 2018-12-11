import auth from './auth_controller';
import Resume from '../models/resume';

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

export default {create, createResume}
