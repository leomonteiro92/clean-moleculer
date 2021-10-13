import { Service } from 'typedi';
import { Connection, getConnection, Repository } from 'typeorm';
import { UserRepositoryReader } from '../../domain/user/user.repository.reader';
import { UserRepositoryWriter } from '../../domain/user/user.repository.writer';
import { User } from '../../domain/user/user.entity';
import { UserTypeOrmEntity } from './user.typeorm.entity';

@Service()
export class UserRepositoryAdapter
  implements UserRepositoryReader, UserRepositoryWriter
{
  repository: Repository<UserTypeOrmEntity>;

  constructor() {
    this.repository = getConnection().getRepository(UserTypeOrmEntity);
  }

  save(user: User): Promise<User> {
    return this.repository.save(user, {
      reload: true,
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({
      email,
    });
  }
}
