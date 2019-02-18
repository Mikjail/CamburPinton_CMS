import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from './../products.model';
import { ProductService } from './../products.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromProducts from '../products.reducer';
import * as ProductsAction from '../products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id',  'name'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService,
    private store: Store<fromProducts.State>) {}

  ngOnInit() {
    this.store.select(fromProducts.getAvailableProducts).subscribe((products: Product[]) => {
      products.length ? this.dataSource.data = products : this.productService.fetchProducts();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
