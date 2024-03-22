import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { DbzListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/DbzForm/addCharacter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, DbzListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
