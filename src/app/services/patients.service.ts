import {Injectable} from "@angular/core";
import {Patient} from "../models/patient";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  public patientId = "3"

  constructor(private http: HttpClient) {}

  getPatientById(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`http://localhost:8021/api/patients/${patientId}`);
  }

}
