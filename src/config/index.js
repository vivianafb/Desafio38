import dotenv from 'dotenv';
import path from 'path';
import minimist from 'minimist'
dotenv.config();

dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
})

const args = minimist(process.argv.slice(2));

const venv = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MODO: process.env.MODO || 'cluster',
  PORT: args.port || 8080,
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'memory',
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'pasw',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'clusterUrl',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'dbName',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'dbNameLocal',
  SESSION_SECRET: process.env.SESSION_SECRET || 'cat',
  SESSION_COOKIE_TIMEOUT_MIN: parseInt(
    process.env.SESSION_COOKIE_TIMEOUT_MIN || '10'
  ),
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
  GMAIL_NAME: process.env.GMAIL_NAME || 'GMAIL owner name',
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'twilioId',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || 'twilioToken',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '+123456789',
  TWILIO_WHATSAPP:  process.env.TWILIO_WHATSAPP ||'+123456789'
};

export default venv;