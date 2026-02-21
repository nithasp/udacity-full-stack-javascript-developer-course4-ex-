import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { InputFieldComponent } from './components/form/input-field/input-field.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    HighlightDirective,
    TruncatePipe,
    InputFieldComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HighlightDirective,
    TruncatePipe,
    InputFieldComponent,
    ProductCardComponent
  ]
})
export class SharedModule {}
