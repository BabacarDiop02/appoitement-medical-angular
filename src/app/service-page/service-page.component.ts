import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from "../models/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  @Input() doctor!: Doctor;

  constructor(private router: Router) {
  }
}
