import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/products.interface';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
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
