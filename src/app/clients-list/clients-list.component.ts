import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAll().subscribe(response => {
      this.clients = response;
    }, error => {
      console.error(error);
    });
  }

}
