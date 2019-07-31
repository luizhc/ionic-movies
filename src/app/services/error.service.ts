import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastService } from './toast.service';

interface MessagesIndex {
  [index: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  params = {
    'Unauthorized': 'Não Autorizado',
    'Invalid API key: You must be granted a valid key.': 'Chave de API inválida: você deve receber uma chave válida.',
    'Not Found': 'Não Encontrado',
    'The resource you requested could not be found.': 'O recurso que você solicitou não pôde ser encontrado.'
    /* Add here the others status and the corresponding messages */
  } as MessagesIndex;

  constructor(private toastService: ToastService) { }

  public handle(error: HttpErrorResponse) {
    let message = error.error.status_message;
    let status = error.statusText;
    message = this.params[message] ? this.params[message] : `Ocorreu algum erro desconhecido. \nStatus do erro: ${status}`;
    status = this.params[status] ? this.params[status] : null;
    this.toastService.present(message, status, 'danger');
  }

}
