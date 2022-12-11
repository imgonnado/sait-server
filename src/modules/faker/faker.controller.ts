import { Controller, Get, Param } from '@nestjs/common';
import { UserDTO } from '../user/dto/user.dto';
import { FakerService } from './faker.service';
import _ from 'lodash';
import { ProjectDTO } from '../project/dto/project.dto';
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

  @Get('/project')
  async makeOneProject(): Promise<ProjectDTO> {
    return await this.fakerService.makeProject();
  }

  @Get('/project/:count')
  async makeManyProject(@Param('count') count: number): Promise<ProjectDTO> {
    return await _.times(count, async () => {
      return this.fakerService.makeProject();
    });
  }
}
