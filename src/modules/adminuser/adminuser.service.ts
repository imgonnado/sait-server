import { Injectable } from '@nestjs/common';
import { AdminuserRepository } from './adminuser.repository';

@Injectable()
export class AdminuserService {
  constructor(private adminuserRepository: AdminuserRepository) {}
}
