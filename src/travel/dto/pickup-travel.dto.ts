import { ApiProperty } from '@nestjs/swagger';

export class PickupTravelDto {
  @ApiProperty({ type: Number, required: true })
  travelId?: number;

  @ApiProperty({ type: Number, required: true })
  latitude?: number;

  @ApiProperty({ type: Number, required: true })
  longitude?: number;
}