import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { Customer } from '../../entities/Customer';

@injectable()
class ListCustomersUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute(): Promise<Customer[]> {
    const customer = await this.customerRepository.list();
    return customer;
  }
}

export { ListCustomersUseCase };
