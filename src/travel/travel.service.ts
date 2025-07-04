import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from 'src/travel/entities/travel.entity';
import { CreateTravelDto } from 'src/travel/dto/create-travel.dto';
import { PickupTravelDto } from './dto/pickup-travel.dto';
import { CompleteTravelDto } from './dto/complete-travel.dto';
import { Invoice } from 'src/invoice/entities/invoice.entity';

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(Travel)
    private travelRepository: Repository<Travel>,
  ) {}

  async findAllActive(): Promise<Travel[]> {
    const entityManager = this.travelRepository.manager;

    const result = await entityManager.query(`EXEC TravelGetAllActive`);
    return result;
  }

  async create(dto: CreateTravelDto): Promise<Travel> {
    const result = await this.travelRepository.query(
      `EXEC TravelCreate 
      @DriverID = ${dto.driverID}, 
      @PassengerID = ${dto.passengerID}, 
      @Latitude = ${dto.latitude}, 
      @Longitude = ${dto.longitude}`
    );
    return result;
  }

  async pickupTravel(dto: PickupTravelDto): Promise<Travel> {
    const result = await this.travelRepository.query(
      `EXEC TravelPickUp
      @TravelID = ${dto.travelId}, 
      @Latitude = ${dto.latitude}, 
      @Longitude = ${dto.longitude}`
    );
    return result;
  }

  async completeTravel(dto: CompleteTravelDto): Promise<Invoice> {
    const result = await this.travelRepository.query(
      `EXEC TravelComplete
      @TravelID = ${dto.travelId}, 
      @Latitude = ${dto.latitude}, 
      @Longitude = ${dto.longitude},
      @TollFee = ${dto.tollFee ?? 'NULL'},
      @TaximeterAmount = ${dto.taximeterAmount ?? 'NULL'}`
    );
    return result;
  }
}
