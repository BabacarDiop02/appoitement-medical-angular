import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
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
export class DoctorPageComponent implements OnInit{
  @Input() doctor!: Doctor;

  ngOnInit(): void {

  }


}
