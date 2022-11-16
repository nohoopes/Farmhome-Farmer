import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalAddFormComponent } from './agricultural-add-form.component';

describe('AgriculturalAddFormComponent', () => {
  let component: AgriculturalAddFormComponent;
  let fixture: ComponentFixture<AgriculturalAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculturalAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
