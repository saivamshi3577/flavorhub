import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  foodItems = [
    { name: 'Pizza', image: 'https://via.placeholder.com/300?text=Pizza' },
    { name: 'Burger', image: 'https://via.placeholder.com/300?text=Burger' },
    { name: 'Pasta', image: 'https://via.placeholder.com/300?text=Pasta' },
    { name: 'Sushi', image: 'https://via.placeholder.com/300?text=Sushi' },
    { name: 'Salad', image: 'https://via.placeholder.com/300?text=Salad' },
    { name: 'Ice Cream', image: 'https://via.placeholder.com/300?text=Ice+Cream' },
    { name: 'Sandwich', image: 'https://via.placeholder.com/300?text=Sandwich' },
    { name: 'Fries', image: 'https://via.placeholder.com/300?text=Fries' },
    { name: 'Tacos', image: 'https://via.placeholder.com/300?text=Tacos' },
    { name: 'Noodles', image: 'https://via.placeholder.com/300?text=Noodles' }
  ];
}
