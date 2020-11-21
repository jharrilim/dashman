import {
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Redirect,
  Render,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { ScanService } from 'scan/scan.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    private readonly scanService: ScanService
  ) {}

  @Get(['', 'index'])
  @Render('index')
  async index() {
    try {
      const scans = (await this.scanService.findAll()).map(scan => ({
        link: `/scans/${scan.id}`,
        dateCreated: scan.dateCreated,
      }));
      this.logger.log(scans);
      return { scans };
    } catch (e) {
      this.logger.log(e);
      return {};
    }
  }

  @Get('scans/:id')
  @Render('scan')
  async scan(@Param('id') id: string) {
    const scan = await this.scanService.findOne(id);
    return { scan };
  }

  @Get('upload')
  @Render('upload')
  upload() {}

  @Post('upload')
  @Redirect('/')
  @UseInterceptors(FileInterceptor('scan'))
  uploadScan(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    this.scanService.create(JSON.parse(file.buffer.toString()));
  }
}
