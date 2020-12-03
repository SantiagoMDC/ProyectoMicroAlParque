import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Vinculacion } from 'src/app/models/vinculacion';
import { VinculacionService } from 'src/app/services/vinculacion.service';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.css']
})
export class VinculacionComponent implements OnInit {

  formRegister: FormGroup;
  vinculacion: Vinculacion;
  submitted = false;
  constructor(
    private vinculacionService: VinculacionService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }
    

  ngOnInit() {
    this.builForm();
  }

  private builForm() {
    this.vinculacion = new Vinculacion();
    this.vinculacion.codigoRestaurante = '';
    this.vinculacion.nombreRestaurante = '';
    this.vinculacion.codigoPersona = '';
    this.vinculacion.nombrePersona = '';

    this.formRegister = this.formBuilder.group({
      codigoRestaurante: [this.vinculacion.codigoRestaurante, Validators.required],
      nombreRestaurante: [this.vinculacion.nombreRestaurante, Validators.required],
      codigoPersona: [this.vinculacion.codigoPersona, Validators.required],
      nombrePersona: [this.vinculacion.nombrePersona, Validators.required],
    });
  }

  get f() {
    return this.formRegister.controls;
  }

  add() {
    this.vinculacion = this.formRegister.value;
    this.vinculacionService.registrar(this.vinculacion).subscribe(p => {
      if (p != null) {
        this.onReset();
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Vinculo Registrado Con exito!! :-)';

        
      }
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.formRegister.reset();
  }
}