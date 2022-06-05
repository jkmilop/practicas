import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultadService } from '../../services/facultad.service';


@Component({
  selector: 'app-facultwd',
  templateUrl: './facultwd.component.html',
  styleUrls: ['./facultwd.component.css']
})
export class FacultwdComponent implements OnInit {
  facultadForm: FormGroup;
  nombre: any;
  estudiantes: any;


  constructor(
    public fb: FormBuilder,
    public facultadService: FacultadService,

  ) { }

  ngOnInit(): void {
    this.facultadForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });
  }
  guardar = (): void => {
    this.facultadService.guardarFacultad(this.facultadForm.value).subscribe(
      (resp) => {
        this.facultadForm.reset();
        this.estudiantes = this.estudiantes.filter(
          (estudiante) => resp.id !== estudiante.id
        );
        this.estudiantes.push(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  };

}
