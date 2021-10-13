import { UserType } from '../user.type';

export class UserInput implements Pick<UserType, 'email' | 'password'> {
  email: string;
  password: string;
}
