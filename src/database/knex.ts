import { knex } from 'knex';
import enviroment from '../enviroments/enviroment'


export const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: enviroment.USER_DATABASE,
        password: enviroment.PASSWORD_DATABASE,
        database: 'databse_solid_nodejs'
    }
})