import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSettingFormComponent } from './farmer-setting-form.component';

describe('FarmerSettingFormComponent', () => {
  let component: FarmerSettingFormComponent;
  let fixture: ComponentFixture<FarmerSettingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSettingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
