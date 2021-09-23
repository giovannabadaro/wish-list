import { Products } from '../entities/Products';
interface ICreateCustomerDTO {
  name: string;
  email: string;
  products?: Products[];
}

export { ICreateCustomerDTO };
