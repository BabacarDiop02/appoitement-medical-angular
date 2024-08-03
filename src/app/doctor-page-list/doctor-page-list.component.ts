import {Component, OnInit} from '@angular/core';
import {Doctor} from "../models/doctor";
import {DoctorPageComponent} from "../doctor-page/doctor-page.component";
import {DoctorsService} from "../services/doctors.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-doctor-page-list',
  standalone: true,
  imports: [
    DoctorPageComponent,
    AsyncPipe
  ],
  templateUrl: './doctor-page-list.component.html',
  styleUrl: './doctor-page-list.component.css'
})
export class DoctorPageListComponent implements OnInit {
  doctors$!: Doctor[];

  constructor(private doctorService: DoctorsService) {
  }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe({
      next: data => {
        this.doctors$ = data;
      }
    });
  }
}
