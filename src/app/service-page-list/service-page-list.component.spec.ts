import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageListComponent } from './service-page-list.component';

describe('ServicePageListComponent', () => {
  let component: ServicePageListComponent;
  let fixture: ComponentFixture<ServicePageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
