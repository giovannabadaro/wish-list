import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, email } = request.body;
      if (email) {
        response.status(400).json({ error: 'Email cant be changed' });
      }
      if (!name) {
        response.status(400).json({ error: 'Name is required' });
      }
      const updateCustomer = container.resolve(UpdateCustomerUseCase);

      const updatedCustomer = await updateCustomer.execute(id, name);

      return response.status(201).json(updatedCustomer);
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { UpdateCustomerController };
