import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlosCarmeliActionsComponent } from './flos-carmeli-actions.component';

describe('FlosCarmeliActionsComponent', () => {
  let component: FlosCarmeliActionsComponent;
  let fixture: ComponentFixture<FlosCarmeliActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlosCarmeliActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlosCarmeliActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
