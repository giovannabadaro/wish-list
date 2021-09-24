import { ICreateProductsDTO } from '../../../customer/dtos/ICreateProductsDTO';
import { getRepository, Repository } from 'typeorm';
import { IProductsRepository } from '../IProductsRepository';
import { Products } from '../../entities/Products';
import { IProductsViewDTO } from '@modules/customer/dtos/IProductView';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Products>;

  constructor() {
    this.repository = getRepository(Products);
  }

  async create({
    external_id,
    review,
    title,
    customer_id,
  }: ICreateProductsDTO): Promise<Products> {
    const product = this.repository.create({
      external_id,
      review,
      title,
      customer_id,
    });

    await this.repository.save(product);

    return product;
  }

  async findProductsByCustomerId(id: string): Promise<IProductsViewDTO[]> {
    const products = await this.repository
      .createQueryBuilder('products')
      .where({ customer_id: id })
      .select([
        'products.external_id',
        'products.title',
        'products.review',
        'products.created_at',
        'products.updated_at',
      ])
      .getMany();

    return products;
  }

  async delete(id: string): Promise<any> {
    return await this.repository.delete(id);
  }

  async findIfProductsExistsCustomerWishList(
    external_id: string,
    customer_id: string
  ): Promise<any> {
    const product = await this.repository
      .createQueryBuilder('products')
      .select(['products.external_id', 'products.customer_id'])
      .where({ customer_id: customer_id })
      .andWhere({ external_id: external_id })
      .getOne();
    return product;
  }
}

export { ProductsRepository };
