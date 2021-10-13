import { createConnection } from 'typeorm';

export default function start() {
  createConnection({
    type: 'postgres',
    host: `${process.env.DB_HOST}`,
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*typeorm.entity{.ts,.js}'],
    synchronize: false,
  });
}
