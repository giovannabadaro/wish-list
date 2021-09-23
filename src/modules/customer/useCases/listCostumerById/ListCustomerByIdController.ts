import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCustomerByIdUseCase } from './ListCustomerByIdUseCase';

class ListCustomerByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const listCustomerByIdUseCase = container.resolve(
        ListCustomerByIdUseCase
      );

      const customer = await listCustomerByIdUseCase.execute(id);

      return response.json(customer);
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { ListCustomerByIdController };
