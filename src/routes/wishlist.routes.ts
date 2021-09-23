import { Router } from 'express';

import { AddWishListController } from '../modules/customer/useCases/addProductWishList/AddProductWishListController';
import { authenticated } from '../middlewares/authenticated';

const wishListRouter = Router();

wishListRouter.use(authenticated);

const addWishListController = new AddWishListController();

wishListRouter.post('/:customerId/:productId', addWishListController.handle);

export { wishListRouter };
