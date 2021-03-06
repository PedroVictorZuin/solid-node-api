import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { MysqlUserRepository } from '../../repositories/implementations/MysqlUserRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';

const mailTrapProvider = new MailTrapMailProvider()
const postgresUserRepository = new MysqlUserRepository()
const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailTrapProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }