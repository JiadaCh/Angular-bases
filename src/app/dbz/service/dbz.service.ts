import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1 },
    { id: uuid(), name: 'Goku', power: 99999 },
    { id: uuid(), name: 'Vegeta', power: 59999 },
  ];

  constructor() {}

  addCharacter(character: Character): void {
    // console.log("Main page");
    // console.log(character);
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    // console.log("Main page");
    // console.log(index);
    // this.characters.splice(index,1)
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
