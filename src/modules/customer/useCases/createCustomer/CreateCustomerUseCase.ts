import { ICreateCustomerDTO } from '../../../customer/dtos/ICreateCustomerDTO';
import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { inject, injectable } from 'tsyringe';
import { Customer } from '../../entities/Customer';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute({ name, email }: ICreateCustomerDTO): Promise<any> {
    const emailExists = await this.customerRepository.findByEmail(email);
    if (!emailExists) {
      return await this.customerRepository.create({
        name,
        email,
      });
    } else {
      return { error: 'Email alredy exists!' };
    }
  }
}

export { CreateCustomerUseCase };
