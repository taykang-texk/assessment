import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() category: string = "Macbook Pro";
  @Input() categoryCode: string = "macbookPro";

  productCat: any;
  product: any;

  all: string = "All"

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductCategory(this.category).subscribe(
      (data) => {
        this.productCat = data;
        this.listOfChip = this.productCat[0]?.chip ;
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );

    this.productService.getProduct(this.category).subscribe(
      (data) => {
        this.product = data;
        this.filterProduct(this.all, this.productCat[this.selectedCatIndex].inch);
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );
  }

  selectedCatIndex: number = 0;
  listOfChip: [] = [];
  selectedChipIndex: number = -1;
  listOfProduct:[] = [];

  selectCat(index: number) {
    this.selectedCatIndex = index;
    this.listOfChip = this.productCat[index]?.chip ;
    this.selectedChipIndex = -1;
    this.filterProduct(this.all, this.productCat[index].inch);
  }

  selectChip(index: number, chip: string) {
    this.selectedChipIndex = index;
    this.filterProduct(chip, this.productCat[this.selectedCatIndex].inch);
  }

  filterProduct(chip: string, catName:string){
    if (chip === this.all) {
      this.listOfProduct = this.product.filter(product => product.inch === catName);
    } else {
      this.listOfProduct = this.product.filter(product => product.chip === chip && product.inch === catName);
    }
  }

}
