import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  form: FormGroup;
  enviado = false;

  constructor(private formB: FormBuilder) { }

  ngOnInit() {
    this.form = this.formB.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required,  Validators.email]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.enviado = true;

    // Si es invalido terminamos el proceso
    if (this.form.invalid) {
      return;
    }

    // Mostramos los datos que ingresaron
    alert('Persona:\n\n' + JSON.stringify(this.form.value, null, 4));
  }

  onReset() {
      this.enviado = false;
      this.form.reset();
  }

}
