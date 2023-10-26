"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pokemon_entity_1 = require("./entities/pokemon.entity");
let PokemonService = class PokemonService {
    constructor(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        this.defaultLimit = configService.get('defaultLimit');
        this.defaultOffset = configService.get('defaultOffset');
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
        try {
            const pokemon = await this.pokemonModel.create(createPokemonDto);
            return pokemon;
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    findAll(paginationDto) {
        const { limit = this.defaultLimit, offset = this.defaultOffset } = paginationDto;
        return this.pokemonModel
            .find()
            .limit(limit)
            .skip(offset)
            .sort({
            idx: 1,
        })
            .select('-__v');
    }
    async findOne(query) {
        let pokemon;
        if (!isNaN(+query)) {
            pokemon = await this.pokemonModel.findOne({ idx: query });
        }
        if (!pokemon && (0, mongoose_2.isValidObjectId)(query)) {
            pokemon = await this.pokemonModel.findById(query);
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({
                name: query.toLocaleLowerCase().trim(),
            });
        }
        if (!pokemon)
            throw new common_1.NotFoundException(`Pokemon with identifier: ${query} not found`);
        return pokemon;
    }
    async update(query, updatePokemonDto) {
        try {
            const pokemon = await this.findOne(query);
            if (updatePokemonDto.name)
                updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
            await pokemon.updateOne(updatePokemonDto, { new: true });
            return Object.assign(Object.assign({}, pokemon.toJSON()), updatePokemonDto);
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    async remove(id) {
        const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
        if (deletedCount === 0) {
            throw new common_1.BadRequestException(`Pokemon with id: ${id} not found`);
        }
    }
    handleExceptions(error) {
        if (error.code === 11000) {
            const [param, value] = Object.entries(error.keyValue)[0];
            throw new common_1.BadRequestException(`Pokemon already exists: ${param} - ${value}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException("Can't create Pokemon - Check server logs");
    }
};
PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map