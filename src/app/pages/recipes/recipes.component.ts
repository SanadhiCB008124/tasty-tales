import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { TabbarComponent } from "../tabbar/tabbar.component";
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import recipes from '../../../assets/data/index';

interface Recipe {
imageUrl: any;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

interface Recipes {
  breakfast: Recipe[];
  lunch: Recipe[];
  dinner: Recipe[];
  dessert: Recipe[];
  snacks: Recipe[];
  pastries: Recipe[];
  beverages: Recipe[];
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterModule, NavbarComponent, TabbarComponent, AddRecipeComponent, FormsModule, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  activeCategory: keyof Recipes = 'breakfast';
  recipeList: Recipe[] = [];

  ngOnInit(): void {
    this.loadRecipes(this.activeCategory);
  }

  loadRecipes(category: keyof Recipes) {
    this.recipeList = recipes[category];
  }

  onTabClick(category: keyof Recipes) {
    this.activeCategory = category;
    this.loadRecipes(category);
  }
}
