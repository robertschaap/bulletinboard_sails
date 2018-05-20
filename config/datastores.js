module.exports.datastores = {

  default: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'bulletinboard'
  },
};
