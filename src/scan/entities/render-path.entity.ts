import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { Rendered } from './rendered.entity';

export class RenderPath {
  @ApiProperty()
  @Column()
  type: string;
  @ApiProperty()
  @Column()
  class: string;
  @ApiProperty()
  @Column()
  method: string;
  @ApiProperty()
  @Column()
  line: number;
  @ApiProperty()
  @Column()
  file: string;
  @ApiProperty()
  @Column(type => Rendered)
  rendered: Rendered;
}
