import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() addedList = new EventEmitter<Ingredient>();

  @ViewChild("nameInput", { static: true }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef;

  // addItems(name:HTMLInputElement,amount){
  //   this.addedList.emit({name: name.value , amount: amount.value})
  //     console.log(name.value,amount.value)
  // }

  addItems() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);

    this.addedList.emit(newIngredient)

  }
}
