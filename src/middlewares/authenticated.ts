import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { secret, usernameAdm } from '../config';
export async function authenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send({ error: 'No token provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, secret);
    if (usernameAdm === sub) {
      next();
      console.log('Now, you are authenticated 👻');
    } else {
      return response.status(401).send({ error: 'Ops! You are not allowed' });
    }
  } catch (error) {
    return response.status(401).send({ error: 'Invalid token' });
  }
}
