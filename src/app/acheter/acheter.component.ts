import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../dto/article.dto';
import {Observable} from "rxjs";

@Component({
  selector: 'app-acheter',
  templateUrl: 'acheter.component.html',
  styles: []
})
export class AcheterComponent implements OnInit {

  achats: Array<{ article: Article, quantite: number }> = [];
  articles$: Observable<Article[]>;
  selectedArticle: Article;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.articles$ = this.http.get<Article[]>('http://localhost:8080/rest/articles');
  }


  supprimer(ligne: any) {
    this.achats = this.achats.filter(l => l !== ligne);
  }

  acheter() {
    this.http.post("http://localhost:8080/rest/acheter",
      this.achats.map(achat => {
        return {quantite: achat.quantite, articleId: achat.article.id}
      })
    ).subscribe();
  }

  add(value: string, article: Article) {
    const quantite = parseInt(value);
    this.achats.push({quantite, article})
  }
}
