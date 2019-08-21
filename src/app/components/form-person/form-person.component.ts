import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  form: FormGroup;
  enviado = false;
  // Clase
  p: Person = new Person();

  constructor(private formB: FormBuilder, private phttp: PersonService) { }

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

    this.p.nombre = this.form.value.nombre;
    this.p.apellido = this.form.value.apellido;
    this.p.correo = this.form.value.correo;

    console.log(this.p);

    // Mostramos los datos que ingresaron
    alert('Persona:\n\n' + JSON.stringify(this.form.value, null, 4));

    this.postPersona(this.p);
    this.onReset();
  }

  onReset() {
      this.enviado = false;
      this.form.reset();
  }

  postPersona(p: Person) {
    this.phttp.post(p).subscribe(
      data => {
        console.log('Esto nos respondio: ' + data);
      },
      err => {console.log('Ah ocurrido un error.');
      }
    );

  }

}
