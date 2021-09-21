import { Router } from 'express';
import { customersRouter } from './customer.routes';

const router = Router();

router.use('/customer', customersRouter);

export { router };
