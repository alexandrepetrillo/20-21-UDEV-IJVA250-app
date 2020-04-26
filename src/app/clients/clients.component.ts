import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../dto/client.dto';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.clients$ = this.http.get<Client[]>('http://localhost:8080/rest/clients');
  }

}

