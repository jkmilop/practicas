import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from './services/estudiante.service';
import { FacultadService } from './services/facultad.service';
import { RolService } from './services/rol.service';
import { UsuarioService } from './services/usuario.service';
import { ProgramaService } from './services/programa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  personaForm: FormGroup;
  estudiantes: any;
  roles: any;
  usuarios: any;
  programas: any;
  facultades: any;
  title: any;

  constructor(
    public fb: FormBuilder,
    public estudianteService: EstudianteService,
    public facultadService: FacultadService,
    public rolService: RolService,
    public programaService: ProgramaService,
    public usuarioService: UsuarioService
  ) {}
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      codigo: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      periodoAspira: ['', Validators.required],
      telefono: ['', Validators.required],
      facultad: ['', Validators.required],
      programa: ['', Validators.required],

    });

    this.facultadService.obtenerFacultad().subscribe(
      (resp) => {
        this.facultades = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    this.estudianteService.obtenerEstudiantes().subscribe(
      (resp) => {
        this.estudiantes = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    /*
    this.personaForm.get('usuario').valueChanges.subscribe(value => {
      this.usuarioService.obtenerUsuarioPorId(value.codigo).subscribe(resp => {
        this.usuarios = resp;
      },
        error => { console.error(error) }
      );
    })

  }*/
  }
    guardar = (): void => {
      this.estudianteService.subirArchivo(this.personaForm.value).subscribe(
        (resp) => {
          this.personaForm.reset();
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
    /*
  eliminar(estudiante){
    this.estudianteService.deletestudiante(estudiante.id).subscribe(resp=>{
      if(resp===true){
        this.estudiantes.pop(estudiante)
      }
    })
  }*/

    editar = (estudiante): void => {
      this.personaForm.setValue({
        codigo: estudiante.codigo,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        edad: estudiante.edad,
        periodoAspira: estudiante.periodoAspira,
        correo: estudiante.correo,
      });
    };

}
