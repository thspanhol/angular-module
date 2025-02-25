import { Component, OnInit, DoCheck } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserApi } from '../../models/user.model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent implements OnInit{

  users: UserApi[] = [];
  inputId: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();    
  };

  loadUsers() {
    this.apiService.getUsers().subscribe(
      (data) => this.users = data,
      (error) => console.log("Erro ao carregar posts", error)
    )
  };

  newUser = {
    nome: "Teste User",
    email: "teste@gmail.com",
    senha: "SenhaTeste"
  };

  editUser = {
    nome: "Update User",
    email: "update@gmail.com",
    senha: "UpdateTeste"
  };

  createUser() {
    this.apiService.createUser(this.newUser).subscribe(() => this.loadUsers());
  }

  updateUser() {
    this.apiService.updateUser(this.inputId, this.editUser).subscribe(() => {
      this.inputId = "";
      this.loadUsers();
    });
  }

  deleteUser() {
    this.apiService.deleteUser(this.inputId).subscribe(() => {
      this.inputId = "";
      this.loadUsers();
    });
  }

  getId = (id: string) => this.inputId = id;
  
}
