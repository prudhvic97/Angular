import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../Shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe : Recipe;
  @Output() recipeSelect = new EventEmitter<void>()

  recipeSelected(){
      this.recipeSelect.emit()
      console.log()
  }
}
