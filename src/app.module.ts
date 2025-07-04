import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver/entities/driver.entity';
import { ConfigService } from './config.service';
import { PassengerModule } from './passenger/passenger.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: ConfigService.get('DB_HOST')?.toString(), 
      port: parseInt(ConfigService.get('DB_PORT') as string, 10), // Convert port to number
      username: ConfigService.get('DB_USERNAME')?.toString(),
      password: ConfigService.get('DB_PASSWORD')?.toString(),
      database: ConfigService.get('DB_NAME')?.toString(),
      synchronize: ConfigService.get('DB_SYNCHRONIZE') === 'true', 
      logging: ConfigService.get('DB_LOGGING') === 'true',
      extra: {
        trustServerCertificate: ConfigService.get('DB_TRUST_CERTIFICATE') === 'true',
      },
      options: {
        instanceName: ConfigService.get('DB_INSTANCE_NAME')?.toString(),
      }, 
    }),
    DriverModule,
    PassengerModule,
    TravelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
