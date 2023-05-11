import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCar(id: number): import("./interfaces/car.interface").Car;
    createCar(body: any): any;
    updateCar(id: number, body: any): any;
    deleteCar(id: number): string;
}
