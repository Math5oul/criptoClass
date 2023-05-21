import { Component } from '@angular/core';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.scss']
})
export class VigenereCipherComponent {
  keyword: string = '';
  plaintext: string = '';
  ciphertext: string = '';

  cipher(): void {
    const keywordLength = this.keyword.length;
    const repeatedKeyword = this.keyword.repeat(Math.ceil(this.plaintext.length / keywordLength)).substr(0, this.plaintext.length);

    this.ciphertext = this.plaintext
      .toLowerCase()
      .replace(/[^a-z]/g, '') // Remove non-alphabetic characters
      .split('')
      .map((char, index) => {
        const charCode = char.charCodeAt(0) - 97;
        const keywordCharCode = repeatedKeyword[index].charCodeAt(0) - 97;
        const encryptedCharCode = (charCode + keywordCharCode) % 26;
        return String.fromCharCode(encryptedCharCode + 97);
      })
      .join('');
  }
}
