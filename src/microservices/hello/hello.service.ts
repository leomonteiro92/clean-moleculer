import { Service as MoleculerService, ServiceBroker } from 'moleculer';

export default class HelloService extends MoleculerService {
  constructor(broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'hello',
      actions: {
        hello: this.hello,
      },
    });
  }

  hello(): string {
    return 'Hello';
  }
}
