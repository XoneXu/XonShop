import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Do czytania inputa
import { HttpClient } from '@angular/common/http'; // Nasz listonosz

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule], // Ważne: musimy zaimportować FormsModule!
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  emailInput: string = ''; // Zmienna, do której wpadnie tekst z HTMLa

  // Zlecenie dla Angulara: "Daj mi instancję listonosza HttpClient, nazwę go 'http'"
  constructor(private http: HttpClient) {}

  subscribe() {
    // Zabezpieczenie: jeśli ktoś kliknie, a input jest pusty, nic nie rób
    if (!this.emailInput) return; 

    const url = 'https://xonshopbackend.onrender.com';
    
    // Tworzymy paczkę. Zauważ, że klucz to "Email" - z dużej litery, 
    // dokładnie tak, jak nazwaliśmy właściwość w klasie "Subscriber" w C#!
    const paczka = { Email: this.emailInput }; 

    // Wysyłamy!
    this.http.post(url, paczka).subscribe({
      next: (odpowiedz) => {
        // Ta sekcja odpala się, gdy serwer C# zwróci "Results.Ok"
        console.log('Serwer odpowiedział:', odpowiedz);
        alert('Dzięki za zapis!');
        this.emailInput = ''; // Czyścimy inputa po sukcesie
      },
      error: (blad) => {
        // Ta sekcja odpala się, gdy serwer leży, port jest zły albo CORS blokuje
        console.error('Błąd połączenia:', blad);
        if (blad.status === 409 && blad.error?.message == "duplikat") 
        {
          alert('Ten email jest już zapisany w newsletterze!');
        }
        else
        {
        alert('Ups, coś poszło nie tak z serwerem.');
        }
      }
    });
  }
}