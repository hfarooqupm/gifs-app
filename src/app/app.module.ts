import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GifsModule,
    SharedModule
  ]
})
export class AppModule { }
