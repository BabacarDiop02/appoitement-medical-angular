import {Injectable} from "@angular/core";
import {Appointment} from "../models/appointment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointments: any;

  constructor(private http: HttpClient) {
  }

  public getAppointmentByPatient(patientId: string): Observable<Appointment> {
    // @ts-ignore
    return this.http.get(`http://localhost:8021/api/appointment/patients/${patientId}`);
  }
}
