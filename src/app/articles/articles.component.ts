import { Component, OnInit } from '@angular/core';
import { Next } from 'react-bootstrap/esm/PageItem';
import { Observable } from 'rxjs';
import { ArticleService } from '../article-service/article.service';
import { Article } from '../article/article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Observable<Article[]>;
  status: string | undefined;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
delete(article:Article){
    
    this.articleService
    .deleteArticle(article.id)
    .subscribe(() => this.status = 'Delete successful');
   
}
create(article:Article){
    if(article.id==0)
    {
      this.articleService
      .createArticle(article)
      .subscribe();
    }
 
 
}
}
