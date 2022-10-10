import { Injectable } from '@nestjs/common';
import { UserInterestKeywordRepository } from './user-interest-keyword.repository';

@Injectable()
export class UserInterestKeywordService {
  constructor(private userInterestKeywordRepository: UserInterestKeywordRepository) {}
}
