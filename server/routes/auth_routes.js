import authController from '../controllers/auth_controller';
import express from 'express'
const router = express.Router();

router.route('/signin')
      .post(authController.signin)
      
export default router;
