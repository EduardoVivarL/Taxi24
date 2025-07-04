import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { Passenger } from './entities/passenger.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  providers: [PassengerService],
  controllers: [PassengerController]
})
export class PassengerModule {}
