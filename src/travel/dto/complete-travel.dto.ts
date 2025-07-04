import { ApiProperty } from '@nestjs/swagger';

export class CompleteTravelDto {
  @ApiProperty({ type: Number, required: true })
  travelId?: number;

  @ApiProperty({ type: Number, required: true })
  latitude?: number;

  @ApiProperty({ type: Number, required: true })
  longitude?: number;
  
  @ApiProperty({ type: Number})
  tollFee?: number;

  @ApiProperty({ type: Number})
  taximeterAmount?: number;

}