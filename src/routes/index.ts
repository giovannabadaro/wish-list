import { Router } from 'express';
import { customersRouter } from './customer.routes';
import { auth } from './auth.routes';
import { wishListRouter } from './wishlist.routes';

const router = Router();

router.use('/customer', customersRouter);

router.use('/auth', auth);

router.use('/wishlist', wishListRouter);

export { router };
