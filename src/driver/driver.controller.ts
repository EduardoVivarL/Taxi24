import { Controller, Get, Param, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Driver } from 'src/driver/entities/driver.entity';

@ApiTags('driver')
@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  @ApiOperation({ summary: 'Get all drivers'})
  @ApiResponse({ status: 200, description: 'Return all drivers.', type:[Driver]})
  getAll() {
    return this.driverService.findAll();
  }

  @Get('/active')
  @ApiOperation({ summary: 'Get all active drivers'})
  @ApiResponse({ status: 200, description: 'Return all active drivers.', type:[Driver]})
  getAllActive() {
    return this.driverService.findAllActive();
  }

  @Get('/nearby')
  @ApiOperation({ summary: 'Get active drivers from x distance of a given location'})
  @ApiResponse({ status: 200, description: 'Return nearby drivers.', type:[Driver]})
  async getNearbyDrivers(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('distance') distance: number,
  ) {
    return this.driverService.getDriversByLocation(latitude, longitude, distance);
  }

  @Get('/nearest')
  @ApiOperation({ summary: 'Get active drivers from x distance of a given location'})
  @ApiResponse({ status: 200, description: 'Return nearby drivers.', type:[Driver]})
  async getNearestDrivers(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('returnedDrivers') returnedDrivers: number,
  ) {
    return this.driverService.getDriversNearestFromLocation(latitude, longitude, returnedDrivers);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get driver by id'})
  @ApiResponse({ status: 200, description: 'Return the driver with given id.', type:[Driver]})
  findById(@Param('id') id: number) {
    return this.driverService.findById(id);
  }
}