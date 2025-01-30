import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
 recipes: any[] = [];
 apiError: string = "";
 selectedIds: string[] = ['52967', '52965', '53076'];

  constructor(private _apiData:ApiDataService){}

  ngOnInit(): void {
    this._apiData.getRecipes().subscribe(
      {
        next: (data) => this.recipes = this.selectedIds.map((id) =>
        data.meals.find((meal: any) => meal.idMeal === id)),
        error: (error) => this.apiError = error
      }
    )
  }
}
