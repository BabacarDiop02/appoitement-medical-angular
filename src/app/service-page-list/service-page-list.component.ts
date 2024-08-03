import {Component, OnInit} from '@angular/core';
import {Doctor} from "../models/doctor";
import {DoctorsService} from "../services/doctors.service";
import {DoctorPageComponent} from "../doctor-page/doctor-page.component";
import {ServicePageComponent} from "../service-page/service-page.component";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-service-page-list',
  standalone: true,
  imports: [
    DoctorPageComponent,
    ServicePageComponent,
    AsyncPipe
  ],
  templateUrl: './service-page-list.component.html',
  styleUrl: './service-page-list.component.css'
})
export class ServicePageListComponent implements OnInit {
  doctors$!: Observable<Doctor[]>;

  constructor(private doctorService: DoctorsService) {
  }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
  }
}
