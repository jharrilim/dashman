import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @CreateDateColumn()
  dateCreated: Date;

  @ApiProperty()
  @Column(type => String)
  repoUrl: string;

  @ApiProperty({ type: () => [Scan] })
  @OneToMany(type => Scan, scan => scan.project)
  scans: Scan[];

  @ApiProperty({ type: () => Organization })
  @ManyToOne(type => Organization, organization => organization.projects)
  organization: Organization;
}
