import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCustomer = container.resolve(DeleteCustomerUseCase);

      const deletedCustomer = await deleteCustomer.execute(id);

      if (deletedCustomer.error) {
        return response
          .status(deletedCustomer?.status)
          .json({ message: deletedCustomer?.error });
      }
      console.log(deletedCustomer);
      return response.status(201).json({ answer: 'successfully deleted' });
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Customer not found | Customer id was not provided' });
    }
  }
}

export { DeleteCustomerController };
