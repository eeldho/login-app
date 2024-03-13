import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AnagramCheckComponent } from './anagram-check/anagram-check.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    FibonacciComponent,
    AnagramCheckComponent,
    LogoutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
