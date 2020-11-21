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
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateCreated: Date;

  @Column({ type: 'jsonb' })
  scan_info: ScanInfo;

  @Column({ type: 'jsonb' })
  warnings: Warning[];

  @Column({ type: 'jsonb' })
  ignored_warnings: any[];

  @Column({ type: 'jsonb' })
  errors: any[];

  @Column({ type: 'jsonb' })
  obsolete: any[];

  @ManyToOne(type => Project)
  project: Project;
}
