import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Driver', { schema: 'dbo' })
export class Driver {
  @PrimaryGeneratedColumn({name: 'DriverID'})
  driverId: number;

  @Column({name: 'FirstName'})
  firstName: string;

  @Column({name: 'LastName'})
  lastName: string;

  @Column({name: 'LicenseNumber'})
  licenseNumber: string;

  @Column({name: 'NationalID'})
  nationalId: string;

  @Column({name: 'Email'})
  email: string;

  @Column({name: 'PhoneNumber'})
  phoneNumber: string;

  @Column({name: 'IsActive'})
  isActive: Boolean;

  @Column({name: 'IsOnline'})
  isOnline: string;

  @Column({name: 'CatalogTravelStatusID'})
  travelStatusId: string | null;
  
  @Column({name: 'LatestTravelStatus'})
  travelStatus: string | null;

  @Column({name: 'Latitude'})
  latitude: number;

  @Column({name: 'Longitude'})
  longitude: number;

@Column({name: 'LocationReportedDate'})
  locationReportedDate: Date;
}