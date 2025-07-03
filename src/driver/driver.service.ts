import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from 'src/Entities/driver.entity';

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
}