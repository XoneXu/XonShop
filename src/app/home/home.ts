import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';
import { Newsletter } from "../newsletter/newsletter";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductDetails, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  // 1. Podajesz tylko to, co jest unikalne (baza danych)
  rawProducts = [
    { id: 1, desc: 'Meow Meow Meow Meow', price: 19.99 },
    { id: 2, desc: 'Meow Meow Meow', price: 5.99 },
    { id: 3, desc: 'Meow Meow', price: 10.01 },
    { id: 4, desc: 'Meow', price: 2.99 },
    { id: 5, desc: 'Meow Meow Meow Meow Meow', price: 29.99 },
    { id: 6, desc: 'Meow Meow Meow Meow Meow Meow', price: 199.99 },
  ];

  // 2. Kod automatycznie buduje pełną listę
  products = this.rawProducts.map(p => ({
    id: p.id,
    name: 'Product ' + p.id,
    desc: p.desc,
    price: p.price + '€',
    img: '/product' + p.id + '.png' // (Dodałem .png, zakładając, że to ścieżki do obrazków)
  }));

  isSidebarOpen = false;
  selectedProduct: any = null;

  // Funkcja odpalana po kliknięciu "Details"
  openDetails(product: any) {
    this.selectedProduct = product;
    this.isSidebarOpen = true; // Wysuwa pasek
  }

  // Funkcja do zamykania paska (ikona X lub kliknięcie w tło)
  closeSidebar() {
    this.isSidebarOpen = false; // Chowa pasek
  }

}
