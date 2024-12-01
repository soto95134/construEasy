import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-create-and-edit-modal',
  standalone: true,
  imports: [],
  templateUrl: './create-and-edit-modal.component.html',
  styleUrl: './create-and-edit-modal.component.scss',
})
export class CreateAndEditModalComponent {
  modalData: any = null;
  isVisible = false;
  private modalSubscription: Subscription | null = null; // Inicializado con null

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalSubscription = this.modalService.modalState$.subscribe(
      (state) => {
        if (state.action === 'open') {
          this.modalData = state.data;
          this.isVisible = true;
        } else if (state.action === 'close') {
          this.isVisible = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    // Verifica que la suscripción no sea null antes de desuscribirse
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  // Aquí puedes agregar más funciones si necesitas interactuar con los datos del modal
}
