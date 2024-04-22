import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Observable, of, switchMap, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentByCreditCardComponent } from './components/payment-by-credit-card/payment-by-credit-card.component';
import { PaymentByQrCodeComponent } from './components/payment-by-qr-code/payment-by-qr-code.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbarv2Component } from './components/navbarv2/navbarv2.component';
// import { HomePageComponent } from './components/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, NavbarComponent , Navbarv2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
// export class AppComponent {
//   title = 'payment-gateway';
// }
export class AppComponent {
  title = 'web-app';

  ngOnInit(): void {
    // initFlowbite();
  }
}
