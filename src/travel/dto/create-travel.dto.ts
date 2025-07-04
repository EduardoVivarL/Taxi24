import { ApiProperty } from '@nestjs/swagger';

export class CreateTravelDto {
  @ApiProperty({ type: Number, required: true })
  driverID?: number;

  @ApiProperty({ type: Number, required: true })
  passengerID?: number;

  @ApiProperty({ type: Number, required: true })
  latitude?: number;

  @ApiProperty({ type: Number, required: true })
  longitude?: number;
}