import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    try {
      const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

      const customer = await createCustomerUseCase.execute({ name, email });

      if (customer?.error) {
        return response
          .status(customer?.status)
          .json({ message: customer?.error });
      }

      return response.status(201).json(customer);
    } catch (error) {
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { CreateCustomerController };
