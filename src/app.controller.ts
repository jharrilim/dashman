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
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ScanService } from 'scan/scan.service';
import { AppService } from './app.service';
@ApiTags('pages')
@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    private readonly scanService: ScanService
  ) {}

  @ApiExcludeEndpoint()
  @Get(['', 'index'])
  @Render('index')
  async index() {
    try {
      const scans = (await this.scanService.findAll()).map(scan => ({
        link: `/scans/${scan.id}`,
        dateCreated: scan.dateCreated,
      }));
      return { scans };
    } catch (e) {
      this.logger.log(e);
      return {};
    }
  }

  @ApiExcludeEndpoint()
  @Get('admin')
  @Render('admin')
  admin() {}

  @ApiExcludeEndpoint()
  @Get('organizations')
  @Render('organizations')
  organizations() {}

  @ApiExcludeEndpoint()
  @Get('organizations/:orgName')
  @Render('organization')
  organization(@Param('orgName') orgName: string) {}

  @ApiExcludeEndpoint()
  @Get('organizations/:orgName/projects')
  @Render('projects')
  projects(@Param('orgName') orgName: string) {}

  @ApiExcludeEndpoint()
  @Get('organizations/:orgName/projects/:projectName')
  @Render('project')
  project(
    @Param('orgName') orgName: string,
    @Param('projectName') projectName: string
  ) {}

  @ApiExcludeEndpoint()
  @Get('organizations/:orgName/projects/:projectName/scans')
  @Render('scans')
  scans(
    @Param('orgName') orgName: string,
    @Param('projectName') projectName: string
  ) {}

  @ApiExcludeEndpoint()
  @Get([
    'organizations/:orgName/projects/:projectName/scans/:scanId',
    'scans/:scanId',
  ])
  @Render('scan')
  async scan(
    @Param('scanId') scanId: number,
    @Param('orgName') orgName?: string,
    @Param('projectName') projectName?: string
  ) {
    const scan = await this.scanService.findOne(scanId);
    const fileWarnings = scan.warnings.reduce(
      (warnings, warning) => ({
        ...warnings,
        [warning.file]: warnings[warning.file]
          ? [...warnings[warning.file], warning]
          : [warning],
      }),
      {}
    );
    return { scan, fileWarnings, title: `Dashman - Scan - ${scanId}` };
  }

  @ApiExcludeEndpoint()
  @Get('upload')
  @Render('upload')
  upload() {}

  @ApiExcludeEndpoint()
  @Post('upload')
  @Redirect('/')
  @UseInterceptors(FileInterceptor('scan'))
  uploadScan(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    this.scanService.create(JSON.parse(file.buffer.toString()));
  }
}
