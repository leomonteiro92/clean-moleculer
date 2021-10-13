import { UseCase } from '../../base.use-case';
import { UserOutput } from '../dto/user.output';
import { UserNotFoundException } from '../exception/user-not-found.exception';
import { User } from '../user.entity';
import { UserRepositoryReader } from '../user.repository.reader';

export abstract class FindUserUseCase implements UseCase<string, UserOutput> {
  constructor(private readonly userRepositoryReader: UserRepositoryReader) {}

  async execute(email?: string): Promise<UserOutput> {
    const existingUser: User = await this.userRepositoryReader.findByEmail(
      email,
    );

    if (!existingUser) {
      throw new UserNotFoundException(email);
    }

    return new UserOutput(existingUser);
  }
}
