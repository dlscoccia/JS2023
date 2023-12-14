import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB connection established');
});

connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
});
