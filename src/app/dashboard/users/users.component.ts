import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { CreateAndEditModalComponent } from './create-and-edit-modal/create-and-edit-modal.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, CreateAndEditModalComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [];
  currentUser: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    role_id: 1,
    name: '',
    rut: '',
    phone_number: '',
    birth_date: '',
    address: '',
    is_active: true,
    avatar_url: '',
  };

  isEditMode = false;

  constructor(
    private userService: UsersService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }

  openModal(user: User = this.currentUser): void {
    this.isEditMode = user.id !== 0;
    this.currentUser = { ...user };

    this.modalService.openModal({
      title: this.isEditMode ? 'Editar Usuario' : 'Crear Usuario',
      data: this.currentUser,
      onSave: () => this.saveUser(),
    });
  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService
        .updateUser(this.currentUser.id, this.currentUser)
        .subscribe(() => {
          this.loadUsers();
        });
    } else {
      this.userService.addUser(this.currentUser).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.loadUsers(); // Recargar la lista de usuarios
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
}
