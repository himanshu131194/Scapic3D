import userController from '../controllers/user_controller';
import express from 'express'
const router = express.Router();

router.route('/users')
      .post(userController.create)

export default router;
