import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component ({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products = [
    {
      name: 'Original Tee',
      description: 'Soft cotton tee with signiture logo.',
      price: '24.99',
      image: 'assets/public/HP-Tshirts.jpeg'
    },
    {
      name: 'Park Cap',
      description: 'Soft cotton tee with signiture logo.',
      price: '18.99',
      image:'assets/public/HP-Cap.jpeg'
    },
    {
      name: 'Tote Bag',
      description: 'Reusable tote bag for all your park essentials.',
      price: '12.99',
      image: 'assets/public/HP-Bag.jpeg'
     },
     {
      name: 'Park Hoodie',
      description: 'Cozy hoodie for chilly park nights.',
      price: '39.99',
      image: 'assets/public/HP-Hoodie.png'
     }
];
}