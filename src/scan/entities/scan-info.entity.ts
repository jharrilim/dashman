import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class ScanInfo {
  @ApiProperty()
  @Column()
  app_path: string;
  @ApiProperty()
  @Column()
  rails_version: string;
  @ApiProperty()
  @Column()
  security_warnings: number;
  @ApiProperty()
  @Column()
  start_time: string;
  @ApiProperty()
  @Column()
  end_time: string;
  @ApiProperty()
  @Column()
  duration: number;
  @ApiProperty()
  @Column()
  checks_performed: string[];
  @ApiProperty()
  @Column()
  number_of_controllers: number;
  @ApiProperty()
  @Column()
  number_of_models: number;
  @ApiProperty()
  @Column()
  number_of_templates: number;
  @ApiProperty()
  @Column()
  ruby_version: string;
  @ApiProperty()
  @Column()
  brakeman_version: string;
}
