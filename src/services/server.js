import express from 'express';
import session from 'express-session'
import apiRouter from '../routes/index'
import path from 'path';
import * as http from 'http';
import MongoStore from 'connect-mongo';
import Config from '../config';
import passport from '../middleware/auth';
import { logger } from '../utils/logs';
import handlebars from 'express-handlebars';
import { initWsServer } from '../services/socket';
const app = express();

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const layoutFolderPath = path.resolve(__dirname, '../../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../../views/layouts/index.hbs');
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutFolderPath,
    defaultLayout: defaultLayerPth,
    extname: 'hbs',
  })
);
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

const myWSServer = initWsServer(server);
const messages = [];

myWSServer.on('connection',  (socket) =>{
  // console.log('\nUn cliente se ha conectado');
  //   console.log(`ID DEL SOCKET DEL CLIENTE => ${socket.client.id}`);
  //   console.log(`ID DEL SOCKET DEL SERVER => ${socket.id}`);

  socket.on('new-message',  (data)=> {
    const newMessage = {
      msge: data,
    };
    messages.push(newMessage);
    myWSServer.emit('messages', messages);
  });

  socket.on('askData', (data) => {
    console.log('ME LLEGO DATA');
    myWSServer.emit('messages', messages);
  });
});

export default server;
