import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../transferencia/transferencia.module';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.componente.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaCOmponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferĂȘncia');

    const valorEmitir: Transferencia = {
      valor: this.valor, 
      destino: this.destino,
    
    };

    this.service.adicionar(valorEmitir).subscribe(
       (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
       },
       (error) => console.error(error)
       );
      
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
