import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPageListComponent } from './doctor-page-list.component';

describe('DoctorPageListComponent', () => {
  let component: DoctorPageListComponent;
  let fixture: ComponentFixture<DoctorPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
