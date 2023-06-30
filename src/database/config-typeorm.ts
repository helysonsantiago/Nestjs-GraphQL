import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS ,
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
};
