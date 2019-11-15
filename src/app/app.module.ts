import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputComponent} from './input.component';
import {OutputComponent} from './output.component';
import {FooterComponent} from './footer.component';
import {StudentDataService} from './student-data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }