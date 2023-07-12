import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar la lista de elementos desde una API o cualquier otra fuente de datos
  }
}
