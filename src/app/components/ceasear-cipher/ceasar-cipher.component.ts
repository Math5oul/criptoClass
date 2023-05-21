import { Component } from '@angular/core';

@Component({
  selector: 'app-ceasar-cipher',
  templateUrl: './ceasar-cipher.component.html',
  styleUrls: ['./ceasar-cipher.component.scss']
})
export class CeasarCipherComponent {
  message: string = '';
  shift: number = 0;
  encryptedMessage: string = '';

  cipher() {
    this.encryptedMessage = this.encryptMessage(this.message, this.shift);
  }

  encryptMessage(message: string, shift: number): string {
    const uppercaseMessage = message.toUpperCase();
    let encryptedMessage = '';

    for (let i = 0; i < uppercaseMessage.length; i++) {
      const char = uppercaseMessage[i];
      if (char.match(/[A-Z]/)) {
        const charCode = uppercaseMessage.charCodeAt(i);
        const shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
        encryptedMessage += String.fromCharCode(shiftedCharCode);
      } else {
        encryptedMessage += char;
      }
    }

    return encryptedMessage;
  }
}
