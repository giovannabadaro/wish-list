import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { Customer } from '../entities/Customer';

interface IUCustomersRepository {
  create({ name, email }: ICreateCustomerDTO): Promise<Customer>;
  list(): Promise<Customer[]>;
  findById(id: string): Promise<Customer>;
  delete(id: string): Promise<Customer>;
  updateName(id: string, name: string): Promise<Customer>;
  findByEmail(email: string): Promise<Customer>;
}

export { IUCustomersRepository };
