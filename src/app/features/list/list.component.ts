import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/products.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
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
