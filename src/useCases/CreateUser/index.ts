import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUserRepository } from './../../repositories/implementations/PostegresUserRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';

const mailTrapProvider = new MailTrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()
const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailTrapProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }