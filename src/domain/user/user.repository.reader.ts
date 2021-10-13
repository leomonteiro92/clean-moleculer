import { User } from './user.entity';

export interface UserRepositoryReader {
  findByEmail(email: string): Promise<User>;
}
