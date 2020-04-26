import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../dto/facture.dto';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  facture$: Observable<Facture>;

  @Input()
  id: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.facture$ = this.http.get<Facture>(`http://localhost:8080/rest/factures/${this.id}`);
  }

}

