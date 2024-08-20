import { Component } from '@angular/core';
import { RecipeService } from '../../../environments/recipe.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  recipeName='';
  ingredients='';
  description='';
  recipeInstructions='';
  recipeCategory='';
  imageFile: File|null = null;

  constructor (private recipeService: RecipeService) {}

  onImageChange(event:any){
    this.imageFile=event.target.files[0];
  }

  async onSubmit() {
    if (this.recipeName && this.ingredients && this.description && this.recipeInstructions && this.recipeCategory && this.imageFile) {
      const recipe = {
        name: this.recipeName,
        ingredients: this.ingredients,
        description: this.description,
        instructions: this.recipeInstructions,
        recipeCategory: this.recipeCategory
      };
      await this.recipeService.addRecipe(recipe, this.imageFile);
    }
  }
}
