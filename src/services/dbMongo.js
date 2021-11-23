import mongoose, {Connection} from 'mongoose';
import Config from '../config';

mongoose.Promise = global.Promise;

export class connectToDB  {
  uri;
  Connection;
  instance
  constructor(){
    this.uri = Config.MONGO_ATLAS_URL;
    this.instance = 0;
  }

  getConnection() {
    if (!this.Connection) this.Connection = mongoose.createConnection(this.uri);
    return this.Connection;
  }
};