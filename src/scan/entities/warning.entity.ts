import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { Location } from './location.entity';
import { RenderPath } from './render-path.entity';

export enum Confidence {
  High = 'High',
  Medium = 'Medium',
  Weak = 'Weak',
}

export class Warning {
  @ApiProperty()
  @Column()
  warning_type: string;
  @ApiProperty()
  @Column()
  warning_code: number;
  @ApiProperty()
  @Column()
  fingerprint: string;
  @ApiProperty()
  @Column()
  check_name: string;
  @ApiProperty()
  @Column()
  message: string;
  @ApiProperty()
  @Column()
  file: string;
  @ApiProperty()
  @Column()
  line: number;
  @ApiProperty()
  @Column()
  link: string;
  @ApiProperty()
  @Column()
  code: null | string;
  @ApiProperty()
  @Column()
  render_path: RenderPath[] | null;
  @ApiProperty()
  @Column()
  location: Location | null;
  @ApiProperty()
  @Column()
  user_input: null | string;
  @ApiProperty()
  @Column('enum', { enum: Confidence })
  confidence: Confidence;
}
