import Twit from 'twit';
import config from '../../config/config';

const list = async (req ,res, next)=>{
      let TweetsList = new Twit({
          consumer_key: config.CONSUMER_KEY,
          consumer_secret: config.CONSUMER_SECRET,
          access_token: config.ACCESS_TOKEN,
          access_token_secret:  config.ACCESS_TOKEN_SECRET
      });
      let queryFilter = {q: 'love', count: 10};
      if(req.query['q']){
         queryFilter['q'] = req.query['q'];
      }
      if(req.query['q'] && req.query['count']){
         queryFilter['count'] = req.query['count'];
      }
      try{
        const tweets = await TweetsList.get('search/tweets', queryFilter);
        return res.status(200).json(tweets);
      }catch(error){
        res.status(401).json({
           error: error.message
        });
      }
}

export default {list}
