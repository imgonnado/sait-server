import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@project/api/database';
import { IUser } from '@project/shared/interfaces';
import { UserDTO } from '../user/dto/user.dto';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class FakerService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: UserRepository) {}
  async makeUser(): Promise<UserDTO> {
    const user: IUser = new UserEntity();

    faker.locale = 'en_US';
    user.email = faker.internet.email();
    user.image = faker.image.avatar();
    user.nickname = faker.name.firstName();
    user.password = faker.internet.password();
    user.loginType = 1;
    faker.locale = 'ko';
    user.name = faker.internet.userName();

    return await this.userRepository.save(user);
  }
}
