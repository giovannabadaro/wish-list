import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AddProductWishListUseCase } from './AddProductWishListUseCase';

class AddWishListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customerId, productId } = request.params;
    try {
      const addProductWishListUseCase = container.resolve(
        AddProductWishListUseCase
      );

      const customer = await addProductWishListUseCase.execute({
        customerId,
        productId,
      });

      return response.status(201).json(customer);
    } catch (error) {
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { AddWishListController };
