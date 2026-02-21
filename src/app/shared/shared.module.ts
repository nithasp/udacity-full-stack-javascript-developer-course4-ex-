import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { InputFieldComponent } from './components/form/input-field/input-field.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    HighlightDirective,
    TruncatePipe,
    InputFieldComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HighlightDirective,
    TruncatePipe,
    InputFieldComponent
  ]
})
export class SharedModule { }
