import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminuserEntity } from '@project/api/database';
import { AdminuserRepository } from './adminuser.repository';

@Injectable()
export class AdminuserService {
  constructor(@InjectRepository(AdminuserEntity) private adminuserRepository: AdminuserRepository) {}
}
