import { Component } from '@angular/core';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.scss']
})
export class VigenereCipherComponent {
  keyword: string = ''; // Variável para armazenar a palavra-chave
  plaintext: string = ''; // Variável para armazenar o texto simples
  ciphertext: string = ''; // Variável para armazenar o texto criptografado

  cipher(): void {
    const keywordLength = this.keyword.length;

    // Repete a palavra-chave para cobrir toda a extensão do texto simples
    const repeatedKeyword = this.keyword.repeat(Math.ceil(this.plaintext.length / keywordLength)).substr(0, this.plaintext.length);

    this.ciphertext = this.plaintext
      .replace(/[^a-zA-Z]/g, '') // Remove caracteres não alfabéticos
      .split('')
      .map((char, index) => {
        const charCode = char.toLowerCase().charCodeAt(0) - 97; // Converte o caractere para o código de 0 a 25
        const keywordCharCode = repeatedKeyword[index].toLowerCase().charCodeAt(0) - 97; // Converte o caractere da palavra-chave para o código de 0 a 25
        const encryptedCharCode = (charCode + keywordCharCode) % 26; // Aplica a cifra de Vigenère
        return String.fromCharCode(encryptedCharCode + 97); // Converte o código de volta para um caractere e adiciona ao texto criptografado
      })
      .join('');
  }
}
