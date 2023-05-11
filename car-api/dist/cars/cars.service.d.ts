import { Car } from './interfaces/car.interface';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    getCarById(id: number): Car;
}
