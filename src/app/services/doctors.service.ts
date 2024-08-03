import {Injectable} from "@angular/core";
import {Doctor} from "../models/doctor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class DoctorsService {

  constructor(private http: HttpClient) {}

  /*private doctors: Doctor[] = [
    new Doctor(
      1,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      2,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      3,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      4,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      5,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      6,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      7,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      8,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      9,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      10,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    ),
    new Doctor(
      11,
      "Babacar",
      "Diop",
      "babacardiop1998@gmail.com",
      "+221 77 694 71 50",
      "Medecin Généraliste",
      "Route de Boune, Keur Massar",
      "Le Dr. Babacar Diop est une médecin généraliste expérimentée avec plus " +
      "de 15 ans d'expérience dans le domaine de la santé. Elle est diplômée " +
      "de l'Université Numérique Cheikh Hamidou Kane du Sénégal et a complété sa résidence à l'Hôpital Le DANTEC. " +
      "Passionnée par la médecine préventive et l'éducation des patients, elle " +
      "s'efforce de fournir des soins complets et personnalisés à chaque patient.",
      "assets/images/imageNoDoctor.png"
    )
  ];*/

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>("http://localhost:8021/api/medecins");
  }

  getDoctorById(doctorId: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`http://localhost:8021/api/medecins/${doctorId}`);
  }
}
