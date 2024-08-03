import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-make-appointment-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './make-appointment-form.component.html',
  styleUrl: './make-appointment-form.component.css'
})
export class MakeAppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      objective: [null, [Validators.required]],
      description: [null],
      date: [null, [Validators.required]],
      hour: [null, [Validators.required]],
    }, {
      updateOn: 'blur',
    })
  }

  onSubmitForm() {
    console.log(this.appointmentForm.value);
  }
}
