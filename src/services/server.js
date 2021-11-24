import express from 'express';
import session from 'express-session'
import apiRouter from '../routes/index'
import path from 'path';
import * as http from 'http';
import MongoStore from 'connect-mongo';
import Config from '../config';
import passport from '../middleware/auth';
import { logger } from '../utils/logs';
import { graphqlHTTP } from 'express-graphql';
import { graphqlRoot, graphqlSchema } from './graphql';

const app = express();
const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const StoreOptions = {
    store: MongoStore.create({
      mongoUrl: Config.MONGO_ATLAS_URL,
      mongoOptions: advancedOptions,
    }),
  
    secret: Config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  };

app.use(
    '/graphql',
    graphqlHTTP({
      schema: graphqlSchema,
      rootValue: graphqlRoot,
      graphiql: true,
    }),
  );
app.use(session(StoreOptions));


app.use(passport.initialize());
app.use(passport.session());

app.use(function(err,req,res,next){
  logger.error(`HUBO UN ERROR ${err.message}`);
    return res.status('500').json({
        error: err.message,
    })
});

app.use('/api',apiRouter);

const server = new http.Server(app);



export default server;
