import { ICreateProductsDTO } from '../../../customer/dtos/ICreateProductsDTO';
import { getRepository, Repository } from 'typeorm';
import { IProductsRepository } from '../IProductsRepository';
import { Products } from '../../entities/Products';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Products>;

  constructor() {
    this.repository = getRepository(Products);
  }

  async create({
    brand,
    external_id,
    image,
    price,
    review,
    title,
    customer_id,
  }: ICreateProductsDTO): Promise<Products> {
    const product = this.repository.create({
      brand,
      external_id,
      image,
      price,
      review,
      title,
      customer_id,
    });

    await this.repository.save(product);

    return product;
  }

  async findProductsByCustomerId(id: string): Promise<any> {
    return await this.repository.find({ customer_id: id });
  }

  async list(): Promise<Products[]> {
    const customers = await this.repository.find();
    return customers;
  }

  async delete(id: string): Promise<any> {
    return await this.repository.delete(id);
  }
}

export { ProductsRepository };
