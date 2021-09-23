import { Router } from 'express';

import { AuthController } from '../modules/auth/UseCases/auth/AuthController';

const auth = Router();

const authController = new AuthController();

auth.post('/', authController.handle);

export { auth };
