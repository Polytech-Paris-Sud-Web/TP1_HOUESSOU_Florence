import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input()
  article ?:Article; 
  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();
  @Output()
  createArticle: EventEmitter<Article> = new EventEmitter();


  constructor(){

  }
  delete(){
    this.deletedArticle.emit(this.article);
}
create(){
  this.createArticle.emit(this.article);
}
  ngOnInit(): void {
  }
}
