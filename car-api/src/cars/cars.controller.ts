import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

        @Get('/')
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get('/:id')
    getCar(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this.carsService.getCarById(id)
    }

    @Post()
    createCar(@Body() body: any){
        return body
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return body
    }
    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return 'delete'
    }
}
