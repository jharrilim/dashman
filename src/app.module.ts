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
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: +(process.env.DATABASE_PORT ?? 5654),
      username: process.env.DATABASE_USERNAME ?? 'dashman',
      password: process.env.DATABASE_PASSWORD ?? 'dashm4n',
      database: process.env.DATABASE_DATABASE ?? 'dashman',
      entities: ['dist/**/*.entity.js'],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    ScanModule,
    OrganizationModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
