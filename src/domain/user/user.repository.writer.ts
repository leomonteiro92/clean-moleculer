import { User } from './user.entity';

export interface UserRepositoryWriter {
  save(user: User): Promise<User>;
}
