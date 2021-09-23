import { container } from 'tsyringe';
import { CustomersRepository } from '../../modules/customer/repositories/implementations/CustomersRepository';
import { ProductsRepository } from '../../modules/customer/repositories/implementations/ProductsRepository';
import { IUCustomersRepository } from '../../modules/customer/repositories/ICustomersRepository';
import { IProductsRepository } from '../../modules/customer/repositories/IProductsRepository';

container.registerSingleton<IUCustomersRepository>(
  'CustomerRepository',
  CustomersRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);
