import { User } from '../user.entity';
import { UserType } from '../user.type';

export class UserOutput implements Omit<UserType, 'password'> {
  id: string;
  email: string;
  blocked: boolean;

  constructor(user: Partial<User>) {
    this.id = user.id;
    this.email = user.email;
    this.blocked = user.blocked;
  }
}
