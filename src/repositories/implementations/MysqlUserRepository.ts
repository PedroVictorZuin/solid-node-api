import { User } from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';
import { connection } from '../../database/knex';
import md5 from 'md5';
import { v4 as uuid_v4 } from "uuid";

export class MysqlUserRepository implements IUsersRepository {

    private users: User[] = [];
    private connection = connection;

    async findByEmail(email: string): Promise<User[]> {
        this.users = await this.connection('user').where({ email: email })
        return this.users
    }
    async save(user: User): Promise<void> {
        await this.connection.table('user').insert({ name: user.name, password: md5(user.password), email: user.email })
    }
}