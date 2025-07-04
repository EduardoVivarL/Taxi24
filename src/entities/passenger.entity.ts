import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Passenger', { schema: 'dbo' })
export class Passenger {
  @PrimaryGeneratedColumn({name: 'PassengerID'})
  passengerId: number;

  @Column({name: 'FirstName'})
  firstName: string;

  @Column({name: 'LastName'})
  lastName: string;

  @Column({name: 'Email'})
  email: string;

  @Column({name: 'PhoneNumber'})
  phoneNumber: string;

  @Column({name: 'IsActive'})
  isActive: Boolean;
}