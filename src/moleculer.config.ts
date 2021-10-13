import 'reflect-metadata';
import { BrokerOptions } from 'moleculer';
import { createConnection } from 'typeorm';

createConnection();

export const brokerConfig: BrokerOptions = {
  namespace: 'core',
  logLevel: 'info',
  serializer: 'JSON',
  metrics: {
    enabled: true,
    reporter: [
      {
        type: 'Prometheus',
        options: {
          port: 3030,
          path: '/metrics',
          defaultLabels: (registry) => ({
            namespace: registry.broker.namespace,
            nodeID: registry.broker.nodeID,
          }),
        },
      },
    ],
  },
  tracing: {
    enabled: true,
    exporter: {
      type: 'Zipkin',
      options: {
        baseURL: 'http://localhost:9411',
        interval: 5,
        payloadOptions: {
          debug: false,
          shared: false,
        },
        defaultTags: null,
      },
    },
  },
};
