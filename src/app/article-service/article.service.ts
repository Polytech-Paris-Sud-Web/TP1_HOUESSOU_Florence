import { Injectable } from '@angular/core';
import { Article, CreateArticle,  } from '../article/article.model';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { catchError, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 

  constructor(private http : HttpClient,httpM:HttpClientModule) {
  }

public getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>("http://localhost:3000/articles");
}

public deleteArticle(id:number): Observable<Article[]> {
  
  return this.http.get<Article[]>(`http://localhost:3000/articles/${id}`).pipe();
}
public createArticle(article:CreateArticle): Observable<Article[]> {
  
  return this.http.post<Article[]>('http://localhost:3000/articles/new',article).pipe();
}

}
