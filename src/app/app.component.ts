import { Component } from '@angular/core';
import {
  PasswordGeneratorService,
  GenerationOptions
} from './services/password-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  generatedPassword: string;
  shuffledPassword: string;
  shuffleInterval: number = 0;
  isChecked = false;
  options: GenerationOptions = {
    length: 20,
    alphabets: {},
    animation: true
  }

  constructor(
    private passwordGenerator: PasswordGeneratorService,
  ) { }

  onOptionAlphabetChange(checked: boolean, alphabetName: string): void {
    this.options.alphabets[alphabetName] = checked;
  }

  onOptionChange(checked: boolean, optionName: string): void {
    this.options[optionName] = checked;

    if (checked && optionName.toLocaleLowerCase() === 'animation'
      && this.shuffleInterval !== 0) {
      window.clearInterval(this.shuffleInterval);
      this.shuffledPassword = undefined;
    }
  }

  onLengthChange(selectedLength: number): void {
    this.options.length = selectedLength
  }

  generatePassword() {
    this.generatedPassword = this.passwordGenerator.getRandomPassword(this.options);
    let charIndex = 0;
    const generationOptions: GenerationOptions = {
      ...this.options,
      alphabets: { ...this.options.alphabets }
    }

    console.log('generationOptions', generationOptions);

    if (this.shuffleInterval) {
      clearInterval(this.shuffleInterval);
    }

    this.shuffleInterval = window.setInterval(() => {
      if (charIndex > this.generatedPassword.length) {
        window.clearInterval(this.shuffleInterval)
        this.shuffleInterval = 0;
        return
      }

      const newSuffleValue = [...new Array(this.generatedPassword.length)]
        .map((empty, i) =>
          i < charIndex
            ? this.generatedPassword[i]
            : this.passwordGenerator.getRandomChar(generationOptions.alphabets || {}),
        )
        .join('')

      this.shuffledPassword = newSuffleValue;

      charIndex++
    }, 30)
  }
}
