import { ICreateProductsDTO } from '../dtos/ICreateProductsDTO';

import { Products } from '../entities/Products';

interface IProductsRepository {
  create({
    brand,
    external_id,
    image,
    price,
    review,
    title,
    customer_id,
  }: ICreateProductsDTO): Promise<Products>;
  findProductsByCustomerId(id: string): Promise<Products>;
  list(): Promise<Products[]>;
}

export { IProductsRepository };
