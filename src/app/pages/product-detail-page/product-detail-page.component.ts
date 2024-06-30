import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  @Input() category: string = "Macbook Pro";
  @Input() categoryCode: string = "macbookPro";

  product: any;
  productDetail: any;

  keyboard: any = [ "Backlit Magic Keyboard with Touch ID - US English", "Backlit Magic Keyboard with Touch ID - Chinese (Pinyin)",
    "Backlit Magic Keyboard with Touch ID - Chinese (Zhuyin)", "Backlit Magic Keyboard with Touch ID - Arabic", "Backlit Magic Keyboard with Touch ID - Japanese"
    ]
  ;

  constructor(private router: Router,private stateService: StateService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getSelectedProduct();
    this.totalPrice = parseFloat(this.product.price);
    this.oriPrice = parseFloat(this.product.price);
    this.calculateTotal();
    console.log(this.product.id)
    this.productService.getProductDetail(this.product.id).subscribe(data => {
      this.productDetail = data;
    });
  }

  getSelectedProduct(){
    this.product=this.stateService.getState('cart');
    console.log(this.stateService.getState('cart'))
    console.log(this.product.colors[this.product.selectedColor].src2)
  }

  selectedStorageIndex: number = 0;
  totalStoragePrice: number = 0;
  selectedMemoryIndex: number = 0;
  totalMemoryPrice: number = 0;
  selectedPowerAdapterIndex: number = 0;
  totalPowerAdapterPrice: number = 0;
  selectedChipIndex: number = 0;
  totalChipPrice: number = 0;

  totalPrice: number;
  oriPrice:number;
  installment: number;

  selectedMemoryOption(index: number) {
    this.selectedMemoryIndex = index;
    this.totalMemoryPrice = this.productDetail.memory[index].price;
    this.calculateTotal();
  }

  selectedStorageOption(index: number) {
    this.selectedStorageIndex = index;
    this.totalStoragePrice = this.productDetail.storage[index].price;
    this.calculateTotal();
  }

  selectedPowerAdapterOption(index: number) {
    this.selectedPowerAdapterIndex = index;
    this.totalPowerAdapterPrice = this.productDetail.powerAdapter[index].price;
    this.calculateTotal();
  }

  selectedChipOption(index: number) {
    this.selectedChipIndex = index;
    this.totalChipPrice = this.productDetail.chips[index].price;
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalPrice = this.oriPrice + this.totalMemoryPrice + this.totalPowerAdapterPrice + this.totalStoragePrice + this.totalChipPrice;
    this.installment = this.totalPrice / 24;
  this.installment = parseFloat(this.installment.toFixed(2)); 
  }

  addToCart(){

  }

}
