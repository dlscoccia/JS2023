import { Router } from 'express';
import passport from 'passport';

const router = Router();

import { special } from '../controllers/private.controller';

router.get(
    '/special',
    passport.authenticate('jwt', { session: false }),
    special
);

export default router;
