import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {AppointmentsService} from "../services/appointments.service";
import {PatientsService} from "../services/patients.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-my-appointment',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
    MatTooltipModule
  ],
  templateUrl: './my-appointment.component.html',
  styleUrl: './my-appointment.component.css'
})
export class MyAppointmentComponent implements OnInit {
  public appointments$: any;
  public dataSource: any;
  public displayedColumns = ['id', 'objective', 'date', 'hour', 'status', 'actions'];

  constructor(private appointmentService: AppointmentsService,
              private patientService: PatientsService) {
  }

  ngOnInit() {
    this.getAppointmentByPatient();
  }

  private getAppointmentByPatient(): void {
    this.appointmentService.getAppointmentByPatient(this.patientService.patientId).subscribe({
      next: data => {
        this.appointments$ = data;
        this.dataSource = new MatTableDataSource(this.appointments$);
      }
    })
  }
}
