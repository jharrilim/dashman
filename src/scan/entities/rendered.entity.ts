import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class Rendered {
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  file: string;
}
