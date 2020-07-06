import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Facture} from "../dto/facture.dto";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styles: ['']
})
export class HomeComponent implements OnInit {

  factures$: Observable<Facture[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.factures$ = this.http.get<Facture[]>('http://localhost:8080/rest/factures');
  }

}

