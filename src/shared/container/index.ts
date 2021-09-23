import { container } from 'tsyringe';
import { CustomersRepository } from '../../modules/customer/repositories/implementations/CustomersRepository';
import { IUCustomersRepository } from '../../modules/customer/repositories/ICustomersRepository';

container.registerSingleton<IUCustomersRepository>(
  'CustomerRepository',
  CustomersRepository
);
