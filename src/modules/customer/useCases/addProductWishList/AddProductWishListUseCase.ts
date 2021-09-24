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
    const customerIdNull = !!customerId === false;
    const productIdNull = !!productId === false;

    if (customerIdNull) {
      return { error: 'Customer Id is Required!', status: 400 };
    }
    if (productIdNull) {
      return { error: 'Product Id is Required!', status: 400 };
    }
    try {
      const foundCustomer = await this.customerRepository.findById(customerId);

      if (!foundCustomer) {
        return { error: 'Not Found Customer!', status: 404 };
      }

      const { data } = await axios.get(
        `https://challenge-api.luizalabs.com/api/product/${productId}/`
      );

      const foundProduct =
        await this.productsRepository.findIfProductsExistsCustomerWishList(
          productId,
          customerId
        );

      if (foundProduct) {
        return {
          error: 'This products is alredy in your wish list!',
          status: 400,
        };
      }
      return await this.productsRepository.create({
        external_id: data.id,
        review: data.reviewScore,
        title: data.title,
        customer_id: customerId,
      });
    } catch (error) {
      return { error: 'Not found Product', status: 404 };
    }
  }
}

export { AddProductWishListUseCase };
