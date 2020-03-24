import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SliderComponent } from './slider/slider.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    SliderComponent,
    CopyButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
