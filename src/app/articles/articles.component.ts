import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../dto/article.dto';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.articles$ = this.http.get<Article[]>('http://localhost:8080/rest/articles');
  }

}
