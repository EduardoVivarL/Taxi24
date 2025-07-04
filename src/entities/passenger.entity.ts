import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Passenger', { schema: 'dbo' })
export class Passenger {

  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'PassengerID'})
  passengerId: number;

  @ApiProperty()
  @Column({name: 'FirstName'})
  firstName: string;

  @ApiProperty()
  @Column({name: 'LastName'})
  lastName: string;

  @ApiProperty()
  @Column({name: 'Email'})
  email: string;

  @ApiProperty()
  @Column({name: 'PhoneNumber'})
  phoneNumber: string;

  @ApiProperty()
  @Column({name: 'IsActive'})
  isActive: Boolean;
}