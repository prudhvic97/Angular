import { Component } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients : Ingredient[]=[
    new Ingredient ('Onion' , 50),
    new Ingredient ('Tomato' , 10)
  ];

}
