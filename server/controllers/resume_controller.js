import auth from './auth_controller';
import Resume from '../models/resume';
import requestPromise from 'request-promise';
import {Pool} from 'pg';
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'scapic',
  password: '123456',
  port: 5432,
});

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
      try {
         const data = await pool.query("SELECT * FROM (SELECT category_id, name,"+
                       "(SELECT array_to_json(array_agg(row_to_json(d))) FROM ("+
                       "SELECT * from products WHERE category_id=categories.category_id) d) "+
                       "as products FROM categories WHERE category_id IN (1,2,3)) t");
         res.send({data: data.rows});
      }catch(e){
         res.send({
            error: e.message
         })
      }
      // const data = await requestPromise({
      //      uri :'https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json',
      //      json:true
      // });
      // res.json({data});
}

export default {create, createResume, listProducts}
