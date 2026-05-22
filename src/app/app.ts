import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Krótkie importy dopasowane do Twoich plików
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { DatePipe } from '@angular/common';
import { inject as injectVercelAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
@Component({
  selector: 'app-root',
  standalone: true,
  // Dodajemy krótkie nazwy klas do imports
  imports: [RouterOutlet, Navbar, Home, Footer, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'XonShop';
}
injectVercelAnalytics();
injectSpeedInsights();