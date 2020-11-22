import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ScanService } from './scan.service';
import { CreateScanDto } from './dto/create-scan.dto';
import { UpdateScanDto } from './dto/update-scan.dto';
import { Scan } from './entities/scan.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('api/scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @ApiCreatedResponse({ type: Scan })
  @Post()
  create(@Body() createScanDto: CreateScanDto): Promise<Scan> {
    return this.scanService.create(createScanDto);
  }

  @Get()
  findAll() {
    return this.scanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scanService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateScanDto: UpdateScanDto) {
    return this.scanService.update(+id, updateScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scanService.remove(+id);
  }
}
