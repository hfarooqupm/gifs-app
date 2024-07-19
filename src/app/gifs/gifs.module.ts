import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { searchboxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    searchboxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    searchboxComponent,
    CardListComponent
  ]
})
export class GifsModule { }
