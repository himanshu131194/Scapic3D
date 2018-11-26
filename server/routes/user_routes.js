import userController from '../controllers/user_controller';
import express from 'express'
const router = express.Router();

router.route('/users')
      .post(userController.create);

router.route('/verify-otp')
      .post(userController.verifyOTP);

export default router;
