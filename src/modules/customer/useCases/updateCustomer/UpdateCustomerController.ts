import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;
      const { name } = request.body;

      if (!name) {
        return response.status(400).json({ message: 'name is required' });
      }

      const updateCustomer = container.resolve(UpdateCustomerUseCase);

      await updateCustomer.execute(id, name);

      return response.status(204).json();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { UpdateCustomerController };
