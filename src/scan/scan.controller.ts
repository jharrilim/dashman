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

@Controller('api/scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  create(@Body() createScanDto: CreateScanDto) {
    return this.scanService.create(createScanDto);
  }

  @Get()
  findAll() {
    return this.scanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.scanService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateScanDto: UpdateScanDto) {
    return this.scanService.update(id, updateScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.scanService.remove(id);
  }
}
