import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-add-Character',
  templateUrl: `./addCharacter.component.html`,
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    //debugger
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name: "", power: 0};
  }
}
