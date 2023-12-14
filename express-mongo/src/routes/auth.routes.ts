import { Router } from 'express';
import { signIn, signUp } from '../controllers/user.controller';

const authRouter = Router();

authRouter.post('/login', signIn);
authRouter.post('/register', signUp);

export default authRouter;
