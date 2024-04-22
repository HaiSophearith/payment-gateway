import { Routes } from '@angular/router';
import { PaymentByQrCodeComponent } from './components/payment-by-qr-code/payment-by-qr-code.component';
import { PaymentByCreditCardComponent } from './components/payment-by-credit-card/payment-by-credit-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {'path': '' ,'title':'Home',component: HomePageComponent},
  {'path': 'qr-code', 'title':'Qr Code',component: PaymentByQrCodeComponent},
  {'path': 'credit-card', 'title':'Credit Card',component:  PaymentByCreditCardComponent},
  {'path': '**' ,component:  PageNotFoundComponent}
];
