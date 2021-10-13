import { UseCase } from '../../base.use-case';
import { Hasher } from '../../cryptography/hasher';

import { UserInput } from '../dto/user.input';
import { UserOutput } from '../dto/user.output';
import { DuplicatedUsernameException } from '../exception/duplicated-username.exception';
import { UserRepositoryReader } from '../user.repository.reader';
import { UserRepositoryWriter } from '../user.repository.writer';

export abstract class SignUpUseCase implements UseCase<UserInput, UserOutput> {
  constructor(
    private readonly userRepositoryReader: UserRepositoryReader,
    private readonly userRepositoryWriter: UserRepositoryWriter,
    private readonly hasher: Hasher,
  ) {}

  async execute(params?: UserInput): Promise<UserOutput> {
    const { email, password } = params;
    const existingUserWithSameUsername =
      await this.userRepositoryReader.findByEmail(email);

    if (existingUserWithSameUsername) {
      throw new DuplicatedUsernameException(email);
    }

    const hashedPassword = await this.hasher.hash(password);

    const savedUser = await this.userRepositoryWriter.save({
      email,
      blocked: false,
      password: hashedPassword,
    });

    return new UserOutput(savedUser);
  }
}
