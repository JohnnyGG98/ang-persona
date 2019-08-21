import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { APPROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonComponent,
    ListPersonComponent,
    FormPersonComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
