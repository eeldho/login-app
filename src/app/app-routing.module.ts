import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramCheckComponent } from './anagram-check/anagram-check.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'anagram-check', component: AnagramCheckComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/login' }, // Any unknown route, redirect back to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
