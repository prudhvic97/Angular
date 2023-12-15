import { Component } from '@angular/core';
import { Recipe } from '../Shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  Recipe :Recipe;


}
