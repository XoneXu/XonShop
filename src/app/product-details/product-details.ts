import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Potrzebne do obsługi klas w HTML

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() product: any = null; // Dane produktu przysłane z zewnątrz
  @Input() isOpen: boolean = false; // Informacja czy pasek ma być wysunięty
  
  @Output() close = new EventEmitter<void>(); // "Przycisk" do wysyłania sygnału zamknięcia

  onClose() {
    this.close.emit(); // Wysyłamy sygnał do rodzica (Home)
  }
}