import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getAll().subscribe(clients => {
      this.clients = clients;
    }, error => {
      console.error(error);
    });
  }

}
