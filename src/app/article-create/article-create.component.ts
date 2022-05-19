import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  articleForm : FormGroup;
  router: any;
  articleService: any;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }
createArticle()
{
  const formModel=this.articleForm.value;
  const newArticle=
  {
    title:formModel.title,
    content:formModel.content,
    author:formModel.author
  };
  this.articleService.createArticle(newArticle).subscribe(()=>this.router.navigateByUrl('/'))
}
  ngOnInit(): void {
  }

}
