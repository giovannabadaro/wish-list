import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCustomer = container.resolve(DeleteCustomerUseCase);

      await deleteCustomer.execute(id);

      return response.status(201).json({ answer: 'successfully deleted', id });
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { DeleteCustomerController };
