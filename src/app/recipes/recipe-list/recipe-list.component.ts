import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyy-GmHgUVupRJnFoHnbCTPZoXfF3zRNVx1ST82YcXia-VG4ZP_Q0B0vR8iA5Mk5knSI&usqp=CAU'),
    new Recipe('A test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyy-GmHgUVupRJnFoHnbCTPZoXfF3zRNVx1ST82YcXia-VG4ZP_Q0B0vR8iA5Mk5knSI&usqp=CAU')
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
