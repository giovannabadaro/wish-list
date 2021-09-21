import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { Customer } from '../../entities/Customer';

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute(id: string, name: string): Promise<Customer> {
    return await this.customerRepository.updateName(id, name);
  }
}

export { UpdateCustomerUseCase };
