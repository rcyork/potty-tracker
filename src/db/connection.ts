import { MongoClient, Db } from 'mongodb';
import config from 'config';

const prefix = (process.env.DB_PREFIX = config.get('mongo.prefix'));
const username = process.env.DB_USERNAME || config.get('mongo.username');
const password = process.env.DB_PASSWORD || config.get('mongo.password');
const endpoint = process.env.DB_URL || config.get('mongo.endpoint');
const dbName = process.env.DB_NAME || config.get('mongo.dbName');

const uri = `${prefix}${username}${
  username ? ':' : ''
}${password}@${endpoint}/${dbName}`;

console.log('uri', uri);

let mongodb: MongoClient;

const connect = async () => {
  mongodb = await MongoClient.connect(uri);
  console.log('Mongo connection established');
};

const get = () => mongodb.db();

const close = () => mongodb.close();

export default {
  connect,
  get,
  close,
};
