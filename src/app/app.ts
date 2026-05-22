import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  // Dodajemy krótkie nazwy klas do imports
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'XonShop';
}