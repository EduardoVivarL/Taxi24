import { Controller, Get, Param } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Passenger } from 'src/entities/passenger.entity';

@ApiTags('passenger')
@Controller('passenger')
export class PassengerController {
    constructor(private readonly passengerService: PassengerService) {}

    @Get()
    @ApiOperation({ summary: 'Get all passengers'})
    @ApiResponse({ status: 200, description: 'Return all passengers.', type:[Passenger]})
    getAll() {
        return this.passengerService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get passenger by id'})
    @ApiResponse({ status: 200, description: 'Return the passenger with given id.', type:[Passenger]})
    findById(@Param('id') id: number) {
        return this.passengerService.findById(id);
    }
}
