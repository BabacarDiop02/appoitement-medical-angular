import {Component, OnInit} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {PatientsService} from "../services/patients.service";
import {Patient} from "../models/patient";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  patient!: any;
  constructor(private patientService: PatientsService) {
  }

  ngOnInit(): void {
    this.getPatientById();
  }

  private getPatientById() {
    this.patientService.getPatientById(this.patientService.patientId).subscribe({
      next: data => {
        this.patient = data;
      }
    })
  }
}
