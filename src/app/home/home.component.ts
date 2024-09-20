import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  sortOrder: string = 'asc';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
  }

  onSort(order: string) {
    this.sortOrder = order;
  }
}
