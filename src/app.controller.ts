import { Controller, Get, Logger, Param, Render } from '@nestjs/common';
import { ScanService } from 'scan/scan.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    private readonly scanService: ScanService
  ) {}

  @Get()
  @Render('index')
  async index() {
    try {
      const scans = (await this.scanService.findAll())
        .map(scan => ({ link: `/scans/${scan.id}`, dateCreated: scan.dateCreated }));

      return { scans };
    } catch (e) {
      this.logger.log(e);
      return { };
    }
  }

  @Get('scans/:id')
  @Render('scan')
  async scan(@Param('id') id: string) {
    const scan = await this.scanService.findOne(id);
    return { scan };
  }
}
