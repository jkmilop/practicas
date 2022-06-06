import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  rolForm: FormGroup;
  nombre: any;
  estado: any;
  estudiantes: any;

  constructor(
  public fb: FormBuilder,
  public rolService: RolService,
  ) { }
  ngOnInit(): void {
    this.rolForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    estado: ['', Validators.required]
  });
  }
  guardar = (): void => {
    this.rolService.guardarUsuarioRol(this.rolForm.value).subscribe(
      (resp) => {
        this.rolForm.reset();
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
