import { Controller, Get, Param } from '@nestjs/common';
import { UserDTO } from '../user/dto/user.dto';
import { FakerService } from './faker.service';
import _ from 'lodash';
@Controller('faker')
export class FakerController {
  constructor(private readonly fakerService: FakerService) {}

  @Get('/user')
  async makeOneUser(): Promise<UserDTO> {
    return await this.fakerService.makeUser();
  }

  @Get('/user/:count')
  async makeManyUser(@Param('count') count: number): Promise<UserDTO[]> {
    return await _.times(count, async () => {
      return await this.fakerService.makeUser();
    });
  }
}
