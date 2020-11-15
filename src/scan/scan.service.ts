import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScanDto } from './dto/create-scan.dto';
import { UpdateScanDto } from './dto/update-scan.dto';
import { Scan } from './entities/scan.entity';

@Injectable()
export class ScanService {
  constructor(
    @InjectRepository(Scan) private readonly scanRepository: Repository<Scan>
  ) {}

  create(createScanDto: CreateScanDto) {
    return this.scanRepository.save(createScanDto);
  }

  findAll() {
    return this.scanRepository.find();
  }

  findOne(id: string) {
    return this.scanRepository.findOne(id);
  }

  update(id: string, updateScanDto: UpdateScanDto) {
    return this.scanRepository.update(id, updateScanDto);
  }

  remove(id: string) {
    return this.scanRepository.delete(id);
  }
}
