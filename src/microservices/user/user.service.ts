import { Context, Service as MoleculerService, ServiceBroker } from 'moleculer';
import Container from 'typedi';
import { createConnection, getConnection } from 'typeorm';
import { UserInput } from '../../domain/user';
import {
  FindUserUseCaseImpl,
  SignUpUseCaseImpl,
} from '../../infrastructure/user';

export default class UserService extends MoleculerService {
  constructor(public readonly broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'users',
      actions: {
        signup: this.signUp,
        find: this.findUser,
      },
      created: () => {
        if (!getConnection('default')) {
          createConnection();
        }
      },
    });
  }

  signUp(ctx: Context<UserInput>) {
    const useCase = Container.of().get(SignUpUseCaseImpl);
    return useCase.execute(ctx.params);
  }

  findUser(ctx: Context<UserInput>) {
    const useCase = Container.of().get(FindUserUseCaseImpl);
    const { email } = ctx.params;
    return useCase.execute(email);
  }
}
