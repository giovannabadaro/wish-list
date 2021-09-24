import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute(id: string): Promise<any> {
    const idNull = !!id === false;
    if (idNull) {
      return { error: 'Id is required!', status: 400 };
    }
    try {
      return await this.customerRepository.delete(id);
    } catch (error) {
      return { error: 'Not found', status: 404 };
    }
  }
}

export { DeleteCustomerUseCase };
