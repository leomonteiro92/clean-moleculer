import { Service } from 'typedi';
import { SignUpUseCase } from '../../../domain/user';
import { BcryptHasher } from '../../cryptography';
import { UserRepositoryAdapter } from '../user.repository.adapter';

@Service()
export class SignUpUseCaseImpl extends SignUpUseCase {
  constructor(
    private readonly userRepositoryAdapter: UserRepositoryAdapter,
    private readonly bcryptHasher: BcryptHasher,
  ) {
    super(userRepositoryAdapter, userRepositoryAdapter, bcryptHasher);
  }
}
