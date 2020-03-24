import { Injectable } from '@angular/core';

export interface AlphabetOptions {
  lowercase?: boolean;
  uppercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

export interface GenerationOptions {
  length: number;
  animation: boolean;
  alphabets: AlphabetOptions;
}

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {
  private readonly ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  private readonly ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly ALPHABET_NUMBERS = '0123456789';
  private readonly ALPHABET_SYMBOLS = '!@#$%&*()_`´{[^~]};:/?<>,.=-+';

  constructor() {

  }

  getRandomPassword(options: GenerationOptions = { length: 5, animation: true, alphabets: {} }, ): string {
    const alphabet =
      (options.alphabets.lowercase ? this.ALPHABET_LOWERCASE : '') +
      (options.alphabets.uppercase ? this.ALPHABET_UPPERCASE : '') +
      (options.alphabets.numbers ? this.ALPHABET_NUMBERS : '') +
      (options.alphabets.symbols ? this.ALPHABET_SYMBOLS : '')
    let result = ''

    for (let i = 0; i < options.length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }

    return result
  }

  getRandomChar(options: AlphabetOptions) {
    const alphabet =
      (options.lowercase ? this.ALPHABET_LOWERCASE : '') +
      (options.uppercase ? this.ALPHABET_UPPERCASE : '') +
      (options.numbers ? this.ALPHABET_NUMBERS : '') +
      (options.symbols ? this.ALPHABET_SYMBOLS : '')

    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }


}
