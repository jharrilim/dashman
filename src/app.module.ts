import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScanModule } from './scan/scan.module';
import { OrganizationModule } from './organization/organization.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5654,
      username: 'dashman',
      password: 'dashm4n',
      database: 'dashman',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    ScanModule,
    OrganizationModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
