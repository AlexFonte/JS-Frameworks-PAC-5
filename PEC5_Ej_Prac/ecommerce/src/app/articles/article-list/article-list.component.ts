import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {ArticleQuantityChange} from "../../model/article-quantity-change";

@Component({
  selector: 'app-article-list',
  template: `
    <app-article-item
      *ngFor="let item of articlesList"
      [article]="item"
      (quantityChange)="onQuantityChange($event)">
    </app-article-item>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit {
  public articlesList: Array<Article>;

  constructor() {
  }

  ngOnInit() {
    this.articlesList = [{
      id: 1,
      name: "Agua Font Vella 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/000127_00_1.jpg",
      price: 0.64,
      isOnSale: true,
      quantityInCart: 0
    }, {
      id: 2,
      name: "Agua Carrefour 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/609744_00_1.jpg",
      price: 0.39,
      isOnSale: false,
      quantityInCart: 0
    }, {
      id: 3,
      name: "Agua Solán de Cabras 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/492590_00_1.jpg",
      price: 0.87,
      isOnSale: true,
      quantityInCart: 0
    }]
  }

  onQuantityChange(articleQuantityChange: ArticleQuantityChange): void {
    console.log(this.articlesList[0]);
    console.log(articleQuantityChange);
    let item = this.articlesList.find(article => article.id === articleQuantityChange.article.id);
    console.log(item);
    item.quantityInCart += articleQuantityChange.quantityChange;
    console.log(item);
  }
}
