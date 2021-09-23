import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { Customer } from '../../entities/Customer';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@injectable()
class ListCustomerByIdUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<any> {
    const customer = await this.customerRepository.findById(id);
    const products = await this.productsRepository.findProductsByCustomerId(id);
    return Object.assign(customer, { wishlist: products });
  }
}

export { ListCustomerByIdUseCase };
