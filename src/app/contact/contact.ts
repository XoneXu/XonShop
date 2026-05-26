import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nameInput: string = '';
  emailInput: string = '';
  messageInput: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    // Zabezpieczenie: nie wysyłaj, jeśli pola są puste
    if (!this.nameInput || !this.emailInput || !this.messageInput) {
      alert('Proszę wypełnić wszystkie pola.');
      return;
    }

    const url = 'https://xonshopbackend.onrender.com/api/contact';
    
    const paczka = {
      Name: this.nameInput,
      Email: this.emailInput,
      Message: this.messageInput
    };

    this.http.post(url, paczka).subscribe({
      next: (odpowiedz) => {
        alert('Wiadomość została wysłana! Odpowiem najszybciej jak to możliwe.');
        // Czyścimy formularz po sukcesie
        this.nameInput = '';
        this.emailInput = '';
        this.messageInput = '';
      },
      error: (blad) => {
        console.error('Błąd podczas wysyłania formularza:', blad);
        alert('Nie udało się wysłać wiadomości. Spróbuj ponownie później.');
      }
    });
  }
}