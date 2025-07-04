import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Travel', { schema: 'dbo' })
export class Travel {

  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'TravelID'})
  travelId: number;

  @ApiProperty()
  @Column({name: 'DriverID'})
  driverId: number;

  @ApiProperty()
  @Column({name: 'DriverName'})
  driverName: string;

  @ApiProperty()
  @Column({name: 'PassengerID'})
  passengerId: number;

  @ApiProperty()
  @Column({name: 'PickUpLatitude'})
  pickUpLatitude: number;

  @ApiProperty()
  @Column({name: 'PickUpLongitude'})
  pickUpLongitude: number;

  @ApiProperty()
  @Column({name: 'DropOffLatitude'})
  dropOffLatitude: number;

  @ApiProperty()
  @Column({name: 'DropOffLongitude'})
  dropOffLongitude: number;

  @ApiProperty()
  @Column({name: 'CatalogTravelStatusID'})
  catalogTravelStatusId: number;
  
  @ApiProperty()
  @Column({name: 'Status'})
  status: string;

  @ApiProperty()
  @Column({name: 'CreatedDate'})
  createdDate: Date;

  @ApiProperty()
  @Column({name: 'StartDate'})
  startDate: Date;

  @ApiProperty()
  @Column({name: 'EndDate'})
  endDate: Date;

}