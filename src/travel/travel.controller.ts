import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TravelService } from './travel.service';
import { Travel } from 'src/travel/entities/travel.entity';
import { CreateTravelDto } from 'src/travel/dto/create-travel.dto';
import { PickupTravelDto } from './dto/pickup-travel.dto';
import { CompleteTravelDto } from './dto/complete-travel.dto';
import { Invoice } from 'src/invoice/entities/invoice.entity';

@ApiTags('travel')
@Controller('travel')
export class TravelController {
    constructor(private readonly travelService: TravelService) {}

    @Get('/active')
    @ApiOperation({ summary: 'Get all active travels'})
    @ApiResponse({ status: 200, description: 'Return all active travels.', type:[Travel]})
    getAllActive() {
        return this.travelService.findAllActive();
    }

    @Post()
    @ApiOperation({ summary: 'Create a new travel' })
    @ApiResponse({ status: 201, description: 'Travel created successfully.', type: Travel })
    createTravel(@Body() dto: CreateTravelDto) {
        return this.travelService.create(dto);
    }

    @Put('/pickup')
    @ApiOperation({ summary: 'Update travel status to in progress' })
    @ApiResponse({ status: 201, description: 'Travel updated successfully.', type: Travel })
    pickupTravel(@Body() dto: PickupTravelDto) {
        return this.travelService.pickupTravel(dto);
    }

    @Put('/complete')
    @ApiOperation({ summary: 'Update travel status to completed' })
    @ApiResponse({ status: 201, description: 'Travel updated successfully. Return the invoice. If taximeterAmount is null then it will be calculated in the database', type: Invoice })
    completeTravel(@Body() dto: CompleteTravelDto) {
        return this.travelService.completeTravel(dto);
    }

}
