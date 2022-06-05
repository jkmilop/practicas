import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramaService } from '../../services/programa.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  programaForm: FormGroup;
  nombre: any;
  estado: any;
  estudiantes: any;

  constructor(
  public fb: FormBuilder,
  public programaService: ProgramaService,
  ) { }
  ngOnInit(): void {
    this.programaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      estado: ['', Validators.required]

    });
  }
  guardar = (): void => {
    this.programaService.guardarPrograma(this.programaForm.value).subscribe(
      (resp) => {
        this.programaForm.reset();
        this.estudiantes = this.estudiantes.filter(
          (estudiante) => resp.codigo !== estudiante.codigo
        );
        this.estudiantes.push(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  };

}
