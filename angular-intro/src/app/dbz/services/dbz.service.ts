import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 9500,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 8000,
      id: uuid(),
    },
  ];

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }
}
