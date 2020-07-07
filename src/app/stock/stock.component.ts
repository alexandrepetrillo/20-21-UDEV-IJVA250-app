import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../dto/article.dto';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: 'stock.component.html',
  styles: []
})
export class StockComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.articles$ = this.http.get<Article[]>('http://localhost:8080/rest/articles');
  }

  modifierStock(a: Article, quantityAsString: string) {
    const quantity = parseInt(quantityAsString, 10);
    this.http.post(`http://localhost:8080/rest/articles/${a.id}/stock?quantity=${quantity}`, null)
      .subscribe((dto: Article) => {
        a.stock = dto.stock;
      });
  }

}
