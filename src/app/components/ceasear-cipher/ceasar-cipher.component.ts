import { Component } from '@angular/core';

@Component({
  selector: 'app-ceasar-cipher',
  templateUrl: './ceasar-cipher.component.html',
  styleUrls: ['./ceasar-cipher.component.scss']
})
export class CeasarCipherComponent {
  message: string = ''; // Variável para armazenar a mensagem de entrada
  shift: number = 0; // Variável para armazenar o valor do deslocamento
  encryptedMessage: string = ''; // Variável para armazenar a mensagem criptografada

  // Função para realizar a cifração
  cipher() {
    this.encryptedMessage = this.encryptMessage(this.message, this.shift);
  }

  // Função para criptografar a mensagem usando o algoritmo da cifra de César
  encryptMessage(message: string, shift: number): string {
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      // Verifica se o caractere é uma letra (A-Z ou a-z)
      if (char.match(/[a-zA-Z]/)) {
        const charCode = message.charCodeAt(i);
        let shiftedCharCode;

        if (char.match(/[A-Z]/)) {
          // Caractere maiúsculo
          shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
        } else {
          // Caractere minúsculo
          shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
        }

        // Converte o código do caractere deslocado de volta para um caractere e adiciona à mensagem criptografada
        encryptedMessage += String.fromCharCode(shiftedCharCode);
      } else {
        // Se o caractere não for uma letra, simplesmente adiciona à mensagem criptografada
        encryptedMessage += char;
      }
    }

    return encryptedMessage; // Retorna a mensagem criptografada
  }
}
