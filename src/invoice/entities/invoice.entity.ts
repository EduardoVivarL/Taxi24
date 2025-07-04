import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Invoice', { schema: 'dbo' })
export class Invoice {

  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'TravelInvoiceID'})
  travelInvoiceiD: number;

  @ApiProperty()
  @Column({name: 'TravelID'})
  travelID: number;

  @ApiProperty()
  @Column({name: 'BaseFare'})
  baseFare: number;

  @ApiProperty()
  @Column({name: 'DistanceBasedFare'})
  distanceBasedFare: number;

  @ApiProperty()
  @Column({name: 'TimeBasedFare'})
  timeBasedFare: number;

  @ApiProperty()
  @Column({name: 'TollFee'})
  tollFee: number;

  @ApiProperty()
  @Column({name: 'TaximeterAmount'})
  taximeterAmount: number;

  @ApiProperty()
  @Column({name: 'Total'})
  total: number;

}