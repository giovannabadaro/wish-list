import { ICreateCustomerDTO } from '../../../customer/dtos/ICreateCustomerDTO';
import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute({ name, email }: ICreateCustomerDTO): Promise<any> {
    const nameNull = !!name === false;
    const emailNull = !!email === false;

    if (nameNull) {
      return { error: 'Name is required!', status: 400 };
    }
    if (emailNull) {
      return { error: 'Email is required!', status: 400 };
    }
    const foundEmail = await this.customerRepository.findByEmail(email);
    if (foundEmail) {
      return { error: 'Email alredy exists!', status: 400 };
    }
    try {
      return await this.customerRepository.create({
        name,
        email,
      });
    } catch (error) {
      return { error: 'Internal server error', status: 500 };
    }
  }
}

export { CreateCustomerUseCase };
