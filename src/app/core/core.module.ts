import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingDirective } from './directives/loading.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    LoadingDirective
  ],
  exports: [
    LoadingDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
