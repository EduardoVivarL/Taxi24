import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from 'src/entities/driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  async findAll(): Promise<Driver[]> {
   const entityManager = this.driverRepository.manager;

    const result = await entityManager.query(`EXEC DriverGetAll`);
    return result;
  }

  async findAllActive(): Promise<Driver[]> {
   const entityManager = this.driverRepository.manager;

    const result = await entityManager.query(`EXEC DriverGetAllActive`);
    return result;
  }

  async findById(driverId: number): Promise<Driver[]> {
   const entityManager = this.driverRepository.manager;

    const result = await entityManager.query(
      `EXEC DriverGetByID
      @DriverID = ${driverId}
    `);
    if (result && result.length > 0) {
      return result[0]; 
    }

    return [];
  }

  async getDriversByLocation(latitude: number, longitude: number, distance: number): Promise<Driver[]> {
   const entityManager = this.driverRepository.manager;

    const result = await entityManager.query(
      `EXEC DriverGetByLocation
      @Latitude = ${latitude},
		  @Longitude = ${longitude},
		  @Meters = ${distance}
    `);
    
      return result; 
  }
}