import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/products.interface';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  productsList: Product[] = [];
  httpClient = inject(ProductsService);

  ngOnInit() {
    this.httpClient.getAll().subscribe((products) => {
      this.productsList = products as Product[];
    });
  }
}
