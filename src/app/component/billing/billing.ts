import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing.html',
  styleUrls: ['./billing.css']
})
export class BillingComponent {

  productName = 'Ice Cream';
  price = 10;
  quantity = 1;

  get total() {
    return this.price * this.quantity;
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
