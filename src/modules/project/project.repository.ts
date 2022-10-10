import { ProjectEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';
import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {}
