import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export enum LocationType {
  Method = 'method',
  Template = 'template',
}

export class Location {
  @ApiProperty()
  @Column('enum', { enum: LocationType })
  type: LocationType;
  @ApiProperty()
  @Column()
  class?: string;
  @ApiProperty()
  @Column()
  method?: string;
  @ApiProperty()
  @Column()
  template?: string;
}
