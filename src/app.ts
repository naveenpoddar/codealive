import mongoose from 'mongoose';
import config from '../config.json';

mongoose.connect(config.mongooseURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(err ? 'Failed to connect to database' : 'Connected to database.'));

import './website/server';

