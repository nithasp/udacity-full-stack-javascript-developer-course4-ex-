import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    CartPageComponent,
    OrderConfirmationComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule {}
