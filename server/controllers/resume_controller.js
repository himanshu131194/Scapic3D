import auth from './auth_controller'

const create = (req, res)=>{
      res.send({
          id: req.profile
      })
}

export default {create}
