import { Router } from 'express';

import { CreateCustomerController } from '../modules/customer/useCases/createCustomer/CreateCustomerController';
import { ListCustomersController } from '../modules/customer/useCases/listCustomers/ListCustomersController';
import { ListCustomerByIdController } from '../modules/customer/useCases/listCostumerById/ListCustomerByIdController';
import { DeleteCustomerController } from '../modules/customer/useCases/deleteCustomer/DeleteCustomerController';
import { UpdateCustomerController } from '../modules/customer/useCases/updateCustomer/UpdateCustomerController';
import { authenticated } from '../middlewares/authenticated';

const customersRouter = Router();

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomersController();
const listCostumerById = new ListCustomerByIdController();
const deleteCustomerController = new DeleteCustomerController();
const updateCustomerController = new UpdateCustomerController();

customersRouter.use(authenticated);

customersRouter.post('/', createCustomerController.handle);

customersRouter.get('/', listCustomerController.handle);

customersRouter.get('/:id', listCostumerById.handle);

customersRouter.delete('/:id', deleteCustomerController.handle);

customersRouter.patch('/:id', updateCustomerController.handle);

export { customersRouter };
