import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {DoctorPageListComponent} from "./doctor-page-list/doctor-page-list.component";
import {OneDoctorPageComponent} from "./one-doctor-page/one-doctor-page.component";
import {ServicePageListComponent} from "./service-page-list/service-page-list.component";
import {ProfileComponent} from "./profile/profile.component";
import {MyAppointmentComponent} from "./my-appointment/my-appointment.component";

export const routes: Routes = [
  { path: 'doctors/:id', component: OneDoctorPageComponent },
  { path: 'doctors', component: DoctorPageListComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'myAppointment', component: MyAppointmentComponent},
  { path: 'services', component: ServicePageListComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent }
];
