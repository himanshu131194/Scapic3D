import userController from '../controllers/user_controller';
import express from 'express'
const router = express.Router();

router.route('/users')
      .post(userController.create);

router.route('/signin')
      .post(userController.signin);

router.route('/check-authenticate')
      .post(userController.hasAuthorization);

export default router;
