import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MakeDataSource} from '../datasources';
import {Students, StudentsRelations} from '../models';

export class StudentsRepository extends DefaultCrudRepository<
  Students,
  typeof Students.prototype.id,
  StudentsRelations
> {
  constructor(
    @inject('datasources.make') dataSource: MakeDataSource,
  ) {
    super(Students, dataSource);
  }
}
