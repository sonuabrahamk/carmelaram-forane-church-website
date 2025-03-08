import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlosCarmeliComponent } from './flos-carmeli.component';

describe('FlosCarmeliComponent', () => {
  let component: FlosCarmeliComponent;
  let fixture: ComponentFixture<FlosCarmeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlosCarmeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlosCarmeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
