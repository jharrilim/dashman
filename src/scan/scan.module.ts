import { Module } from '@nestjs/common';
import { ScanService } from './scan.service';
import { ScanController } from './scan.controller';
import { Scan } from './entities/scan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Scan])],
  controllers: [ScanController],
  providers: [ScanService],
  exports: [ScanService]
})
export class ScanModule { }
