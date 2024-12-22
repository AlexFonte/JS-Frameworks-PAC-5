import { Component } from '@angular/core';
import { Article } from '../../model/article';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameArticleValidator } from '../../custom-validator/name-article-validator';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  public invalidForm: boolean = false;
  public articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator.forbiddenNames(['Prova', 'Test', 'Mock', 'Fake'])]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\\/[^\s]*?$')]],
      isOnSale: [false]
    });
  }

  createArticle(): void {
    if (this.articleForm.invalid) {
      this.invalidForm = true;
      console.log("Article invalid", this.articleForm.value)
    } else {
      const newArticle: Article = this.articleForm.value;
      this.invalidForm = false;
      console.log("Nou article", newArticle);
    }
  }

  get name() { return this.articleForm.get('name'); }
  get price() { return this.articleForm.get('price'); }
  get imageUrl() { return this.articleForm.get('imageUrl'); }
  get isOnSale() { return this.articleForm.get('isOnSale'); }
}

