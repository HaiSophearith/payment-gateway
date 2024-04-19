import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByCreditCardComponent } from './payment-by-credit-card.component';

describe('PaymentByCreditCardComponent', () => {
  let component: PaymentByCreditCardComponent;
  let fixture: ComponentFixture<PaymentByCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentByCreditCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentByCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
