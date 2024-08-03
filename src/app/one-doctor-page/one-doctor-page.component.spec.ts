import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDoctorPageComponent } from './one-doctor-page.component';

describe('DoctorPageComponent', () => {
  let component: OneDoctorPageComponent;
  let fixture: ComponentFixture<OneDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDoctorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
