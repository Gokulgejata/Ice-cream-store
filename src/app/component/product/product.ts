import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent implements AfterViewInit {

  productId = '';

  iceImage = 'assets/ice-purple.png';
  popImage = 'assets/pop-green.png';

  selectedProduct = '';
  selectedFlavour = '';
  selectedSize = '';
  quantity = 1;
  price = 10;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productId === '1') {
      document.getElementById('pop')!.style.display = 'none';
      this.selectedProduct = 'Ice Cream';
    }

    if (this.productId === '2') {
      document.getElementById('ice')!.style.display = 'none';
      this.selectedProduct = 'Popsicle';
    }
  }

  changeIce(color: string, flavour: string) {
    this.iceImage = `assets/ice-${color}.png`;
    this.selectedFlavour = flavour;
  }

  changePop(color: string, flavour: string) {
    this.popImage = `assets/pop-${color}.png`;
    this.selectedFlavour = flavour;
  }

  setActive(event: any) {
    const buttons = event.target.parentElement.querySelectorAll('.flavour');
    buttons.forEach((btn: any) => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  openCart() {
    if (!this.selectedSize) {
      this.selectedSize = 'Small';
    }

    if (!this.selectedFlavour) {
      this.selectedFlavour = 'prune';
    }

    document.getElementById('cart-overlay')!.classList.add('show');
    document.getElementById('cart-popup')!.classList.add('show');
  }

  closeCart() {
    document.getElementById('cart-overlay')!.classList.remove('show');
    document.getElementById('cart-popup')!.classList.remove('show');
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goBilling() {
    this.router.navigate(['/billing']);
  }

  get total() {
    return this.price * this.quantity;
  }
}
