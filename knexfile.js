
module.exports = {
  development: {
    client: 'sqlite3',
    connection: { 
      filename: './data/notes.sqlite3' 
    }, 
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    useNullAsDefault: true, 
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
  },
};
