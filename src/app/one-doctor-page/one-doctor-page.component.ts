import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Doctor} from "../models/doctor";
import {DoctorsService} from "../services/doctors.service";
import {Observable} from "rxjs";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MakeAppointmentFormComponent} from "../make-appointment-form/make-appointment-form.component";

// @ts-ignore
@Component({
  selector: 'app-doctor-page',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf,
    MakeAppointmentFormComponent
  ],
  templateUrl: './one-doctor-page.component.html',
  styleUrl: './one-doctor-page.component.css'
})
export class OneDoctorPageComponent implements OnInit{
  doctor!: any;
  showContent: boolean = false;

  constructor(private doctorService: DoctorsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDoctorById();
  }

  private getDoctorById() {
    const doctorId = this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(doctorId).subscribe({
      next: data => {
        this.doctor = data;
      }
    });
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
