import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './containers/pets/pets.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';


@NgModule({
  declarations: [PetsComponent, PetsListComponent],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
