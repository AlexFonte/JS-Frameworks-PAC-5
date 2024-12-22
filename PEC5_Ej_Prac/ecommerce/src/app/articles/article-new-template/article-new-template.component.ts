import { Component } from '@angular/core';
import { Article } from '../../model/article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {

  public newArticle: Article;
  public invalidForm: boolean = false;
  constructor() { }

  createAritcle(articleForm: NgForm): void {
    if (articleForm.invalid) {
      this.invalidForm = true;
    } else {
      this.newArticle = articleForm.value;
      this.invalidForm = false;
    }
  }
}
