import authController from '../controllers/auth_controller';
import express from 'express';
import passport from 'passport';
const router = express.Router();

router.route('/signin')
      .post(authController.signin);

router.route('/auth/google')
      .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

router.route('/auth/google/callback')
      .get(
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
          //Successful authentication, redirect home.
          res.status(200).json({
              data: {
                 auth: true
              }
          })
          //res.redirect('/');
        }
      );

export default router;
