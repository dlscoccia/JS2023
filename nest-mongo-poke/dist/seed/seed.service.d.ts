import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';
export declare class SeedService {
    private readonly pokemonModel;
    private readonly http;
    constructor(pokemonModel: Model<Pokemon>, http: FetchAdapter);
    execute(): Promise<string>;
}
