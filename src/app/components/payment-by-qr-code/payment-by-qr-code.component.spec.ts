import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByQrCodeComponent } from './payment-by-qr-code.component';

describe('PaymentByQrCodeComponent', () => {
  let component: PaymentByQrCodeComponent;
  let fixture: ComponentFixture<PaymentByQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentByQrCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentByQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
