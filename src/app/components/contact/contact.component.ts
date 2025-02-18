import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      alert(`Message Sent!\n\nName: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
      
      // Reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }

}
