module.exports = {
  type: 'postgres',
  port: 5431,
  host: 'localhost',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'wish-list',
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  entities: ['./src/modules/**/entities/*.ts'],
};
