import { UserType } from './user.type';

export class User implements UserType {
  id?: string;
  email: string;
  password: string;
  blocked: boolean;
}
