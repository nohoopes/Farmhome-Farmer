import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalCardComponent } from './agricultural-card.component';

describe('AgriculturalCardComponent', () => {
  let component: AgriculturalCardComponent;
  let fixture: ComponentFixture<AgriculturalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculturalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
