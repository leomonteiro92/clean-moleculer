import { Service } from 'typedi';
import { FindUserUseCase } from '../../../domain/user';

import { UserRepositoryAdapter } from '../user.repository.adapter';

@Service()
export class FindUserUseCaseImpl extends FindUserUseCase {
  constructor(private readonly userRepositoryAdapter: UserRepositoryAdapter) {
    super(userRepositoryAdapter);
  }
}
