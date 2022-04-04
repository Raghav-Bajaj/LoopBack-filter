import {Entity, model, property} from '@loopback/repository';

@model()
export class Students extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  section: string;

  @property({
    type: 'number',
    required: true,
  })
  number: number;


  constructor(data?: Partial<Students>) {
    super(data);
  }
}

export interface StudentsRelations {
  // describe navigational properties here
}

export type StudentsWithRelations = Students & StudentsRelations;
