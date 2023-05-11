import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
        {
        id: uuid(),
        brand: 'Fonzi',
        model: 'FonziMobil'
    },
        {
        id: uuid(),
        brand: 'Peugeot',
        model: '208'
    }
]

    findAll() {
        return this.cars
    }

    getCarById(id: string) {
        const car = this.cars.find(car => car.id === id)
        
        if (!car) throw new NotFoundException(`Car #${id}, not found`)
        
        return car
    }

}
