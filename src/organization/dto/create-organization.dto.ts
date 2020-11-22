import { PartialType } from '@nestjs/mapped-types';
import { Organization } from 'organization/entities/organization.entity';

export class CreateOrganizationDto extends PartialType(Organization) {}
