import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCrousselComponent } from './product-croussel.component';

describe('ProductCrousselComponent', () => {
  let component: ProductCrousselComponent;
  let fixture: ComponentFixture<ProductCrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCrousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
