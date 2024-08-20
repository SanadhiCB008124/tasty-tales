import { Component, OnInit } from '@angular/core';
import recipes from '../../../assets/data/index';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define the types for the recipe categories
type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snacks' | 'pastries' | 'beverages';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  recipe: any;
  category: RecipeCategory = 'breakfast'; // Default value or set based on your logic
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      this.name = params['name'];

      // Type assertion to ensure category is a valid RecipeCategory
      if (category && this.isRecipeCategory(category)) {
        this.category = category;
        this.recipe = recipes[this.category].find((recipe: any) => recipe.name === this.name);
      }
    });
  }

  // Type guard to check if a category is valid
  private isRecipeCategory(category: any): category is RecipeCategory {
    return ['breakfast', 'lunch', 'dinner', 'dessert', 'snacks', 'pastries', 'beverages'].includes(category);
  }
}
