import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { RolService } from '../../services/rol.service';
import { ProgramaService } from '../../services/programa.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  nombre: any;
  apellido: any;
  correo: any;
  telefono : any;
  rol: any;
  estado : any;
  programa: any;
  usuarios: any;
  programas: any;
  roles: any;

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService,
    public rolService: RolService,
    public programaService: ProgramaService

  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      codigo: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      estado: ['', Validators.required],
      rol: ['', Validators.required],
      programa: ['', Validators.required],

    });

    this.rolService.obtenerUsuarioRol().subscribe(
      (resp) => {
        this.usuarios = resp;
      },
      (error) => {
        console.error(error);
      }
    );
    this.programaService.obtenerPrograma().subscribe(
      (resp) => {
        this.usuarios = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
    guardar = (): void => {
      this.usuarioService.guardarUsuario(this.usuarioForm.value).subscribe(
        (resp) => {
          this.usuarioForm.reset();
          this.usuarios = this.usuarios.filter(
            (usuario) => resp.codigo !== usuario.codigo
          );
          this.usuarios.push(resp);
        },
        (error) => {
          console.error(error);
        }
      );
    };

}
