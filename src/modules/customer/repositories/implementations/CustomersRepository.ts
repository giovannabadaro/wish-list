import { ICreateCustomerDTO } from '../../../customer/dtos/ICreateCustomerDTO';
import { getRepository, Repository } from 'typeorm';
import { IUCustomersRepository } from '../ICustomersRepository';
import { Customer } from '../../entities/Customer';

class CustomersRepository implements IUCustomersRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.repository.create({
      name,
      email,
    });

    await this.repository.save(customer);

    return customer;
  }

  async list(): Promise<Customer[]> {
    const customers = await this.repository.find();
    return customers;
  }

  async findById(id: string): Promise<any> {
    return await this.repository.findOne(id);
  }

  async delete(id: string): Promise<any> {
    return await this.repository.delete(id);
  }

  async updateName(id: string, name: string): Promise<any> {
    return await this.repository
      .createQueryBuilder()
      .update()
      .set({ name })
      .where('id = :id')
      .setParameters({ id })
      .execute()
      .then();
  }

  async findByEmail(email: string): Promise<any> {
    return await this.repository.findOne({ email: email });
  }
}

export { CustomersRepository };
