import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: FetchAdapter,
  ) {}

  async execute() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    const pokemonToInsert: { name: string; idx: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const idx = +url.split('/').at(-2);

      pokemonToInsert.push({ name, idx });
    });
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
