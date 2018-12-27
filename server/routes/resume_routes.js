import resumeController from '../controllers/resume_controller';
import authController from '../controllers/auth_controller';

import express from 'express'
const router = express.Router();

router.route('/auth')
      .post(authController.hasAuthorization, resumeController.create)

router.route('/create-resume')
      .post(resumeController.createResume)

router.route('/list-products')
      .get(resumeController.listProducts)

export default router;
