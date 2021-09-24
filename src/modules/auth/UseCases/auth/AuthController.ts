import { Request, Response } from 'express';
import { AuthUseCase } from './AuthUseCase';

class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;
      const authUseCase = new AuthUseCase();

      const authInfo = await authUseCase.execute({ username, password });
      if (authInfo.error) {
        return response
          .status(authInfo.status)
          .json({ message: authInfo.error });
      }

      return response.status(200).json({ token: authInfo });
    } catch (error) {
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { AuthController };
