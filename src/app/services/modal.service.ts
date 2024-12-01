import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<any>();
  modalState$ = this.modalSubject.asObservable();

  openModal(data: any): void {
    this.modalSubject.next({ action: 'open', data });
  }

  closeModal(): void {
    this.modalSubject.next({ action: 'close' });
  }
}
