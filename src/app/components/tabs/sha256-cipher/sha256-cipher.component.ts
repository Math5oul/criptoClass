import { Component } from '@angular/core';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-sha256-cipher',
  templateUrl: './sha256-cipher.component.html',
  styleUrls: ['./sha256-cipher.component.scss']
})
export class Sha256CipherComponent {
  message: string = '';
  hashedMessage: string = '';

  cipher(): void {
    this.hashedMessage = SHA256(this.message).toString();
  }
}
