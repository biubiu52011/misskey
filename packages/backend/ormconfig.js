module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER || 'misskey',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'misskey',
    synchronize: false,
    logging: false,
    entities: ['dist/entities/**/*.js'],
    migrations: ['dist/migrations/**/*.js'],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations'
    }
};
