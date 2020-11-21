import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScanModule } from './scan/scan.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'dashman',
      password: 'dashm4n',
      database: 'dashman',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      
      authSource: 'admin'
    }),
    ScanModule,
    OrganizationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
