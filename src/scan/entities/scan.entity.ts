import { ApiProperty } from '@nestjs/swagger';
import { Project } from 'project/entities/project.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScanInfo } from './scan-info.entity';
import { Warning } from './warning.entity';

@Entity()
export class Scan {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @CreateDateColumn()
  dateCreated: Date;

  @ApiProperty({ type: () => ScanInfo })
  @Column({ type: 'jsonb' })
  scan_info: ScanInfo;

  @ApiProperty({ type: () => [Warning] })
  @Column({ type: 'jsonb' })
  warnings: Warning[];

  @ApiProperty()
  @Column({ type: 'jsonb' })
  ignored_warnings: any[];

  @ApiProperty()
  @Column({ type: 'jsonb' })
  errors: any[];

  @ApiProperty()
  @Column({ type: 'jsonb' })
  obsolete: any[];

  @ApiProperty({ type: () => Project })
  @ManyToOne(type => Project)
  project: Project;

  @ApiProperty({ type: () => String, nullable: true })
  @Column({
    nullable: true,
    type: 'varchar',
  })
  commitHash: string | null;
}
