import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

class Program {
  private app: NestExpressApplication;

  constructor(private readonly logger: Logger = new Logger(Program.name)) {}

  async bootstrap() {
    this.app = await NestFactory.create<NestExpressApplication>(AppModule);

    const options = new DocumentBuilder()
      .setTitle('Dashman API')
      .setDescription('Interactive documentation for the Dashman API.')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, options);
    SwaggerModule.setup('api', this.app, document);

    this.app.useStaticAssets(join(__dirname, '..', 'public'));
    this.app.setBaseViewsDir(join(__dirname, '..', 'views'));
    this.app.setViewEngine('ejs');

    return this;
  }

  async start() {
    const port = process.env.PORT ?? 3000;
    await this.app.listen(port);
    this.logger.log(`Listening on port ${port}`);
    return this;
  }

  static create() {
    return new Program();
  }
}

if (require.main.filename === __filename) {
  Program.create()
    .bootstrap()
    .then(app => app.start());
}
