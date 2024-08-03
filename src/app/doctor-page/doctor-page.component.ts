import {Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Doctor} from "../models/doctor";

// @ts-ignore
@Component({
  selector: 'app-doctor-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.css'
})
export class DoctorPageComponent {
  @Input() doctor!: Doctor;

  constructor(private router: Router) {
  }

  onViewDoctor() {
    this.router.navigateByUrl(`/doctors/${this.doctor.id}`);
  }
}
