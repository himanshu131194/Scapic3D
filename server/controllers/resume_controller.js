import auth from './auth_controller';
import Resume from '../models/resume';
import requestPromise from 'request-promise';
import config from '../../config/config';

const pool = config.pool;
const create = (req, res)=>{
      res.send({
          id: req.profile
      })
}
const createResume = (req, res, next)=>{
       res.send({
          data: "Himanshu"
       });
}
const listProducts = async (req, res, next)=>{
      const offset = req.query['offset'];
      const limit = req.query['limit'];
      try {
         const data = await pool.query("SELECT * FROM (SELECT category_id, name,"+
                       "(SELECT array_to_json(array_agg(row_to_json(d))) FROM ("+
                       "SELECT * from products WHERE category_id=categories.category_id LIMIT 4) d) "+
                       `as products FROM categories WHERE category_id > ${offset} LIMIT ${limit}) t`);
         res.send({data: data.rows});
      }catch(e){
         res.send({
            error: e.message
         });
      }
}
export default {create, createResume, listProducts}
