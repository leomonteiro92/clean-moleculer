import { DuplicatedUsernameException } from '../exception/duplicated-username.exception';
import { SignUpUseCase } from './signup.use-case';

class DummySignUpUseCase extends SignUpUseCase {}

describe('SignUp UseCase', () => {
  let useCase: SignUpUseCase;
  const userRepositoryReader = { findByEmail: jest.fn() };
  const userRepositoryWriter = { save: jest.fn() };
  const hasher = { hash: jest.fn() };

  beforeAll(() => {
    useCase = new DummySignUpUseCase(
      userRepositoryReader,
      userRepositoryWriter,
      hasher,
    );
  });

  it('should save a user if username is not in use', async () => {
    userRepositoryReader.findByEmail.mockResolvedValueOnce(null);
    hasher.hash.mockResolvedValueOnce('abcdef');
    const input = { email: 'dummy@example.com', password: '123456' };

    await useCase.execute(input);

    expect(userRepositoryWriter.save).toBeCalledWith({
      email: 'dummy@example.com',
      password: 'abcdef',
      blocked: false,
    });
  });

  it('should not save if a username already exists', async () => {
    userRepositoryReader.findByEmail.mockResolvedValueOnce({
      email: 'dummy@example.com',
      blocked: false,
      password: '123456',
    });
    const input = { email: 'dummy@example.com', password: '123456' };

    await expect(useCase.execute(input)).rejects.toBeInstanceOf(
      DuplicatedUsernameException,
    );
  });
});
