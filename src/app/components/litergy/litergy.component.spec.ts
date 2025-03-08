import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitergyComponent } from './litergy.component';

describe('LitergyComponent', () => {
  let component: LitergyComponent;
  let fixture: ComponentFixture<LitergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
