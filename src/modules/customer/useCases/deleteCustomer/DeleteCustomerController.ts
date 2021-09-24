import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCustomer = container.resolve(DeleteCustomerUseCase);

      const deletedCustomer = await deleteCustomer.execute(id);
      const {} = deletedCustomer;

      if (deletedCustomer?.error) {
        return response
          .status(deletedCustomer?.status)
          .json({ message: deletedCustomer?.error });
      }
      return response.status(204).json();
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { DeleteCustomerController };
