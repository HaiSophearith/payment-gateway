import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarv2Component } from './navbarv2.component';

describe('Navbarv2Component', () => {
  let component: Navbarv2Component;
  let fixture: ComponentFixture<Navbarv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbarv2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Navbarv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
