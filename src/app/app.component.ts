import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordGeneratorService, GenerationOptions } from './services/password-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  generatedPassword: string;
  isChecked = false;
  form: FormGroup;
  options: GenerationOptions = {
    length: 20,
    alphabets: {}
  }

  constructor(
    private formBuilder: FormBuilder,
    private passwordGenerator: PasswordGeneratorService,
  ) {
    this.form = this.formBuilder.group({
      lowercase: false,
      uppercase: false,
      numbers: false,
      symbols: false,
      animation: true,
    })
  }

  onAlphabetOptionChange(checked: boolean, alphabetName: string): void {
    this.options.alphabets[alphabetName] = checked;
    console.log(this.options);
  }

  onLengthChange(selectedLength: number): void {
    this.options.length = selectedLength
  }

  generatePassword() {
    this.generatedPassword = this.passwordGenerator.getRandomPassword(this.options);
  }
}
