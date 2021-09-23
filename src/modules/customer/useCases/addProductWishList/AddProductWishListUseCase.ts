import { IUCustomersRepository } from '../../repositories/ICustomersRepository';
import { IProductsRepository } from '../../../customer/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

import axios from 'axios';

interface IRequest {
  customerId: string;
  productId: string;
}

@injectable()
class AddProductWishListUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CustomerRepository')
    private customerRepository: IUCustomersRepository
  ) {}

  async execute({ customerId, productId }: IRequest): Promise<any> {
    const customerExists = await this.customerRepository.findById(customerId);
    if (!customerExists) {
      return;
    }
    const { data } = await axios.get(
      `https://challenge-api.luizalabs.com/api/product/${productId}/`
    );
    return await this.productsRepository.create({
      brand: data.brand,
      external_id: data.id,
      image: data.image,
      price: data.price,
      review: data.review,
      title: data.title,
      customer_id: customerId,
    });
  }
}

export { AddProductWishListUseCase };
