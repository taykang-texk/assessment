import { Component, Input, OnInit } from '@angular/core';
import { StateService } from 'src/app/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  colors = null;
  selectedColorIndex: number | null = null;
  selectedColorName: string | null = null;

  selectColor(index: number) {
    this.selectedColorIndex = index;
    this.selectedColorName = this.colors[index].colorName;
  }
  constructor(private router: Router,private stateService: StateService) { }

  ngOnInit(): void {
    this.colors = this.product.colors;
    this.selectedColorIndex = 0;
    this.selectedColorName = this.colors[0].colorName;
    console.log(this.colors)
  }

  next(product){
    const productWithColor = { ...product, selectedColor: this.selectedColorIndex };
    this.stateService.setState('cart', productWithColor);
    console.log(this.stateService.getState('cart'));
    this.router.navigate(['/productDetail']);
  }

}
