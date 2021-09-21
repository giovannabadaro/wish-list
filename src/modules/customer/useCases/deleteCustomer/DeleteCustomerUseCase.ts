import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { Customer } from '../../entities/Customer';

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute(id: string): Promise<Customer> {
    return await this.customerRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
