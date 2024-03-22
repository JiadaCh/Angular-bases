import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: `./list.component.html`,
    styleUrl: './list.component.css',
})
export class DbzListComponent {
  @Input() characterList:Character[] = [];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{

    if (!id) return;

    this.onDeleteId.emit(id);
  }
}
