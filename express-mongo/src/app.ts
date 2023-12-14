import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import privateRoutes from './routes/private.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

// Initializations
export const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send(`Ecoquartz API running at port: ${app.get('port')}`);
});

app.use(authRouter);
app.use(privateRoutes);
