import { Organization } from 'organization/entities/organization.entity';
import { Scan } from 'scan/entities/scan.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateCreated: Date;

  @Column(type => String)
  repoUrl: string;

  @OneToMany(type => Scan, scan => scan.project)
  scans: Scan[];

  @ManyToOne(type => Organization, organization => organization.projects)
  organization: Organization;
}
