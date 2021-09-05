import { IMailProvider } from './../../providers/IMailProvider';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUserRepository'
import { User } from '../../entities/User';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }


    async execute(data: CreateUserRequestDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)
        if (userAlreadyExist) {
            throw new Error("User Already exists")
        }
        const user = new User(data);
        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Equipe do meu app",
                email: "equipe@meuapp.com",
            },
            subject: "Seja Bem vindo ao nosso app",
            body: "<p> Você já pode realizar login em nossa plataforma </p>"
        })
    }
}