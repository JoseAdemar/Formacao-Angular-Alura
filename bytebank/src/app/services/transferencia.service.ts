import{ HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../transferencia/transferencia.module';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  //Get Lista os extratos
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  //POST registra um extrato
  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
