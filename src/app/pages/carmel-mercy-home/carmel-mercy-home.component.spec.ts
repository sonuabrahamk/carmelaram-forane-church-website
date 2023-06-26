import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelMercyHomeComponent } from './carmel-mercy-home.component';

describe('CarmelMercyHomeComponent', () => {
  let component: CarmelMercyHomeComponent;
  let fixture: ComponentFixture<CarmelMercyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelMercyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarmelMercyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
