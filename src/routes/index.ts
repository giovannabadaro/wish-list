import { Router } from 'express';
import { customersRouter } from './customer.routes';
import { auth } from './auth.routes';

const router = Router();

router.use('/customer', customersRouter);

router.use('/auth', auth);

export { router };
