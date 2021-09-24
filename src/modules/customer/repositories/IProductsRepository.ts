import { ICreateProductsDTO } from '../dtos/ICreateProductsDTO';
import { IProductsViewDTO } from '../dtos/IProductView';

import { Products } from '../entities/Products';

interface IProductsRepository {
  create({
    external_id,
    review,
    title,
    customer_id,
  }: ICreateProductsDTO): Promise<Products>;
  findProductsByCustomerId(id: string): Promise<IProductsViewDTO[]>;
}

export { IProductsRepository };
