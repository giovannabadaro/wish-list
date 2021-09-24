import { inject, injectable } from 'tsyringe';

import { IUCustomersRepository } from '../../repositories/ICustomersRepository';

@injectable()
class UpdateCustomerUseCase {
  /*   status: number;
  error: any; */
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute(id: string, name: string): Promise<any> {
    if (!id) {
      return { error: 'Id is required!', status: 400 };
    }
    if (!name) {
      return { error: 'Name is required!', status: 400 };
    }

    try {
      const foundCustomer = await this.customerRepository.findById(id);
      if (!foundCustomer) {
        return { error: 'Not Found!', status: 404 };
      }

      return await this.customerRepository.updateName(id, name);
    } catch (error) {
      return { error: 'Not found', status: 404 };
    }
  }
}

export { UpdateCustomerUseCase };
