import {Component, OnInit} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {PatientsService} from "../services/patients.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  patient!: any;
  age!: number;

  constructor(private patientService: PatientsService) {}

  ngOnInit(): void {
    this.getPatientById();
  }

  private getPatientById() {
    this.patientService.getPatientById(this.patientService.patientId).subscribe({
      next: data => {
        this.patient = data;
        this.age = this.calculateAge(this.patient.dateOfBirth);
      }
    })
  }

  private calculateAge(birthdate: string): number {
    let birthDate = new Date(birthdate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age;
  }
}
