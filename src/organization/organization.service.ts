import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.organizationRepository.save(createOrganizationDto);
  }

  findAll() {
    return this.organizationRepository.find();
  }

  findOne(id: number) {
    return this.organizationRepository.findOne(id);
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.update(id, updateOrganizationDto);
  }

  remove(id: number) {
    return this.organizationRepository.delete(id);
  }
}
