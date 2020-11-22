import { PartialType } from '@nestjs/mapped-types';
import { Scan } from '../entities/scan.entity';

export class CreateScanDto extends PartialType(Scan) {}
