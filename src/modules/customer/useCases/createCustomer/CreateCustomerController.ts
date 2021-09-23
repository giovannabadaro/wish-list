import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    try {
      if (!name) {
        return response.status(400).json({ error: 'Name is required' });
      }
      if (!email) {
        return response.status(400).json({ error: 'Email is required' });
      }

      const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

      const customer = await createCustomerUseCase.execute({ name, email });

      return response.status(201).json(customer);
    } catch (error) {
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { CreateCustomerController };
