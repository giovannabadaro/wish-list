import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { usernameAdm, passwordAdm } from '../../../../config';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  token: string;
}
class AuthUseCase {
  async execute({ username, password }: IRequest): Promise<any> {
    const userMatch = usernameAdm === username;
    const passwordMatch = await compare(password, passwordAdm);
    if (userMatch && passwordMatch) {
      const token = sign({}, '9c913b59c8f764ef5574efec63e06d28', {
        subject: usernameAdm,
        expiresIn: '1d',
      });
      return token;
    } else {
      return { error: 'Not Authorized', status: 401 };
    }
  }
}

export { AuthUseCase };
