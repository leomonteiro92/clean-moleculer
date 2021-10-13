import { Service as MoleculerService, ServiceBroker } from 'moleculer';

export default class GreeterService extends MoleculerService {
  constructor(broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'greeter',
      actions: {
        sayHi: this.sayHi,
      },
    });
  }

  sayHi(): string {
    return 'Hi';
  }
}
