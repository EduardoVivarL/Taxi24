import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Driver', { schema: 'dbo' })
export class Driver {
  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'DriverID'})
  driverId: number;

  @ApiProperty()
  @Column({name: 'FirstName'})
  firstName: string;

  @ApiProperty()
  @Column({name: 'LastName'})
  lastName: string;

  @ApiProperty()
  @Column({name: 'LicenseNumber'})
  licenseNumber: string;

  @ApiProperty()
  @Column({name: 'NationalID'})
  nationalId: string;

  @ApiProperty()
  @Column({name: 'Email'})
  email: string;

  @ApiProperty()
  @Column({name: 'PhoneNumber'})
  phoneNumber: string;

  @ApiProperty()
  @Column({name: 'IsActive'})
  isActive: Boolean;

  @ApiProperty()
  @Column({name: 'IsOnline'})
  isOnline: string;

  @ApiProperty()
  @Column({name: 'CatalogTravelStatusID'})
  travelStatusId: string;
  
  @ApiProperty()
  @Column({name: 'LatestTravelStatus'})
  travelStatus: string;

  @ApiProperty()
  @Column({name: 'Latitude'})
  latitude: number;

  @ApiProperty()
  @Column({name: 'Longitude'})
  longitude: number;

  @ApiProperty()
  @Column({name: 'LocationReportedDate'})
  locationReportedDate: Date;
}