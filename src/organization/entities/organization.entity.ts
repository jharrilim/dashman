import { ApiProperty } from '@nestjs/swagger';
import { Project } from 'project/entities/project.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Organization {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @CreateDateColumn()
  dateCreated: Date;

  @ApiProperty({ type: () => Project })
  @OneToMany(type => Project, project => project.organization)
  projects: Project[];
}
