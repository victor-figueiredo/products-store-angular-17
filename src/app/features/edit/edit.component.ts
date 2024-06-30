import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/products.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productsService = inject(ProductsService);
  snackbar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.snackbar.open('Produto salvo', 'Ok');
      this.goBack();
    });
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
