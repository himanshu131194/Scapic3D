import express from 'express';
import tweetsCtrl from '../controllers/tweet.controller';

const router = express.Router();

router.route('/api/tweets')
      .get(tweetsCtrl.list);

export default router;
