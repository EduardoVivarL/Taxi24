import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger } from 'src/entities/passenger.entity';

@Injectable()
export class PassengerService {
    constructor(
        @InjectRepository(Passenger)
        private passengerRepository: Repository<Passenger>,
      ) {}

     async findAll(): Promise<Passenger[]> {
       const entityManager = this.passengerRepository.manager;
    
        const result = await entityManager.query(`EXEC PassengerGetAll`);
        return result;
      }
    
    
      async findById(PassengerId: number): Promise<Passenger[]> {
       const entityManager = this.passengerRepository.manager;
    
        const result = await entityManager.query(
          `EXEC PassengerGetByID
          @PassengerID = ${PassengerId}
        `);
        if (result && result.length > 0) {
          return result[0]; 
        }
    
        return [];
      }
}
