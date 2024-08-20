const recipes = {
  breakfast: [
    {
      name: "Garlic Pasta",
      description: "Creamy pasta tossed with a rich garlic-infused sauce.",
      ingredients: [
        "200g Spaghetti",
        "100g Ground Beef",
        "1 cup Tomato Sauce",
        "4 cloves Garlic, minced",
        "1/2 cup Heavy Cream",
        "1 tbsp Olive Oil",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Cook the spaghetti according to package instructions. \n" +
        "2. In a pan, heat olive oil and sauté minced garlic until fragrant. \n" +
        "3. Add ground beef and cook until browned. \n" +
        "4. Pour in tomato sauce and let it simmer for 10 minutes. \n" +
        "5. Stir in heavy cream and season with salt and pepper. \n" +
        "6. Combine the cooked pasta with the sauce and serve warm.",
      imageUrl: "../../../assets/images/creamyGarlicPasta.png"
    },
    {
      name: "Vegetable Pizza",
      description: "A healthy homemade pizza topped with fresh vegetables and mozzarella.",
      ingredients: [
        "Pizza Dough",
        "1 cup Tomato Sauce",
        "1 cup Mozzarella Cheese, shredded",
        "1/2 cup Bell Peppers, sliced",
        "1/2 cup Onions, sliced",
        "1/2 cup Mushrooms, sliced",
        "1/2 cup Black Olives, sliced",
        "1 tbsp Olive Oil",
        "Oregano and Basil to taste"
      ],
      instructions: 
        "1. Preheat oven to 220°C (425°F). \n" +
        "2. Roll out the pizza dough on a floured surface to desired thickness. \n" +
        "3. Spread tomato sauce over the dough. \n" +
        "4. Sprinkle shredded mozzarella evenly over the sauce. \n" +
        "5. Top with sliced bell peppers, onions, mushrooms, and olives. \n" +
        "6. Drizzle olive oil and sprinkle oregano and basil on top. \n" +
        "7. Bake in the preheated oven for 15-20 minutes until the crust is golden and the cheese is bubbly.",
      imageUrl: "../../../assets/images/vegetablePizza.png"
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes topped with butter and maple syrup.",
      ingredients: [
        "1 1/2 cups All-Purpose Flour",
        "1 tbsp Baking Powder",
        "1 tbsp Sugar",
        "1/2 tsp Salt",
        "1 1/4 cups Milk",
        "1 large Egg",
        "3 tbsp Butter, melted",
        "Maple Syrup and Butter for serving"
      ],
      instructions: 
        "1. In a large bowl, whisk together flour, baking powder, sugar, and salt. \n" +
        "2. In another bowl, whisk together milk, egg, and melted butter. \n" +
        "3. Pour the wet ingredients into the dry ingredients and stir until just combined. \n" +
        "4. Heat a griddle or frying pan over medium heat and lightly grease it. \n" +
        "5. Pour 1/4 cup of batter onto the griddle for each pancake. \n" +
        "6. Cook until bubbles form on the surface, then flip and cook until golden brown. \n" +
        "7. Serve hot with butter and maple syrup.",
      imageUrl: "../../../assets/images/pancake.png"
    },
    {
      name: "Italian Salad",
      description: "A fresh and light salad with grilled chicken and mixed greens.",
      ingredients: [
        "2 Chicken Breasts",
        "4 cups Mixed Greens (Lettuce, Spinach, Arugula)",
        "1 cup Cherry Tomatoes, halved",
        "1/2 cup Cucumber, sliced",
        "1/4 cup Red Onion, thinly sliced",
        "1/4 cup Parmesan Cheese, shaved",
        "1/4 cup Italian Dressing",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Season chicken breasts with salt and pepper, then grill until fully cooked. \n" +
        "2. Let the chicken rest, then slice into strips. \n" +
        "3. In a large bowl, combine mixed greens, cherry tomatoes, cucumber, and red onion. \n" +
        "4. Top the salad with grilled chicken and shaved Parmesan cheese. \n" +
        "5. Drizzle with Italian dressing and toss to coat. Serve immediately.",
      imageUrl: "../../../assets/images/italianSalad.png"
    }
  ],
  lunch: [
    {
      name: "Vegetable Pizza",
      description: "A healthy homemade pizza topped with fresh vegetables and mozzarella.",
      ingredients: [
        "Pizza Dough",
        "1 cup Tomato Sauce",
        "1 cup Mozzarella Cheese, shredded",
        "1/2 cup Bell Peppers, sliced",
        "1/2 cup Onions, sliced",
        "1/2 cup Mushrooms, sliced",
        "1/2 cup Black Olives, sliced",
        "1 tbsp Olive Oil",
        "Oregano and Basil to taste"
      ],
      instructions: 
        "1. Preheat oven to 220°C (425°F). \n" +
        "2. Roll out the pizza dough on a floured surface to desired thickness. \n" +
        "3. Spread tomato sauce over the dough. \n" +
        "4. Sprinkle shredded mozzarella evenly over the sauce. \n" +
        "5. Top with sliced bell peppers, onions, mushrooms, and olives. \n" +
        "6. Drizzle olive oil and sprinkle oregano and basil on top. \n" +
        "7. Bake in the preheated oven for 15-20 minutes until the crust is golden and the cheese is bubbly.",
      imageUrl: "../../../assets/images/vegetablePizza.png"
    },
    {
      name: "Garlic Pasta",
      description: "Creamy pasta tossed with a rich garlic-infused sauce.",
      ingredients: [
        "200g Spaghetti",
        "100g Ground Beef",
        "1 cup Tomato Sauce",
        "4 cloves Garlic, minced",
        "1/2 cup Heavy Cream",
        "1 tbsp Olive Oil",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Cook the spaghetti according to package instructions. \n" +
        "2. In a pan, heat olive oil and sauté minced garlic until fragrant. \n" +
        "3. Add ground beef and cook until browned. \n" +
        "4. Pour in tomato sauce and let it simmer for 10 minutes. \n" +
        "5. Stir in heavy cream and season with salt and pepper. \n" +
        "6. Combine the cooked pasta with the sauce and serve warm.",
      imageUrl: "../../../assets/images/creamyGarlicPasta.png"
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes topped with butter and maple syrup.",
      ingredients: [
        "1 1/2 cups All-Purpose Flour",
        "1 tbsp Baking Powder",
        "1 tbsp Sugar",
        "1/2 tsp Salt",
        "1 1/4 cups Milk",
        "1 large Egg",
        "3 tbsp Butter, melted",
        "Maple Syrup and Butter for serving"
      ],
      instructions: 
        "1. In a large bowl, whisk together flour, baking powder, sugar, and salt. \n" +
        "2. In another bowl, whisk together milk, egg, and melted butter. \n" +
        "3. Pour the wet ingredients into the dry ingredients and stir until just combined. \n" +
        "4. Heat a griddle or frying pan over medium heat and lightly grease it. \n" +
        "5. Pour 1/4 cup of batter onto the griddle for each pancake. \n" +
        "6. Cook until bubbles form on the surface, then flip and cook until golden brown. \n" +
        "7. Serve hot with butter and maple syrup.",
      imageUrl: "../../../assets/images/pancake.png"
    },
    {
      name: "Italian Salad",
      description: "A fresh and light salad with grilled chicken and mixed greens.",
      ingredients: [
        "2 Chicken Breasts",
        "4 cups Mixed Greens (Lettuce, Spinach, Arugula)",
        "1 cup Cherry Tomatoes, halved",
        "1/2 cup Cucumber, sliced",
        "1/4 cup Red Onion, thinly sliced",
        "1/4 cup Parmesan Cheese, shaved",
        "1/4 cup Italian Dressing",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Season chicken breasts with salt and pepper, then grill until fully cooked. \n" +
        "2. Let the chicken rest, then slice into strips. \n" +
        "3. In a large bowl, combine mixed greens, cherry tomatoes, cucumber, and red onion. \n" +
        "4. Top the salad with grilled chicken and shaved Parmesan cheese. \n" +
        "5. Drizzle with Italian dressing and toss to coat. Serve immediately.",
      imageUrl: "../../../assets/images/italianSalad.png"
    }
  ],
  dinner: [
    {
      name: "Garlic Pasta",
      description: "Creamy pasta tossed with a rich garlic-infused sauce.",
      ingredients: [
        "200g Spaghetti",
        "100g Ground Beef",
        "1 cup Tomato Sauce",
        "4 cloves Garlic, minced",
        "1/2 cup Heavy Cream",
        "1 tbsp Olive Oil",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Cook the spaghetti according to package instructions. \n" +
        "2. In a pan, heat olive oil and sauté minced garlic until fragrant. \n" +
        "3. Add ground beef and cook until browned. \n" +
        "4. Pour in tomato sauce and let it simmer for 10 minutes. \n" +
        "5. Stir in heavy cream and season with salt and pepper. \n" +
        "6. Combine the cooked pasta with the sauce and serve warm.",
      imageUrl: "../../../assets/images/creamyGarlicPasta.png"
    },
    {
      name: "Vegetable Pizza",
      description: "A healthy homemade pizza topped with fresh vegetables and mozzarella.",
      ingredients: [
        "Pizza Dough",
        "1 cup Tomato Sauce",
        "1 cup Mozzarella Cheese, shredded",
        "1/2 cup Bell Peppers, sliced",
        "1/2 cup Onions, sliced",
        "1/2 cup Mushrooms, sliced",
        "1/2 cup Black Olives, sliced",
        "1 tbsp Olive Oil",
        "Oregano and Basil to taste"
      ],
      instructions: 
        "1. Preheat oven to 220°C (425°F). \n" +
        "2. Roll out the pizza dough on a floured surface to desired thickness. \n" +
        "3. Spread tomato sauce over the dough. \n" +
        "4. Sprinkle shredded mozzarella evenly over the sauce. \n" +
        "5. Top with sliced bell peppers, onions, mushrooms, and olives. \n" +
        "6. Drizzle olive oil and sprinkle oregano and basil on top. \n" +
        "7. Bake in the preheated oven for 15-20 minutes until the crust is golden and the cheese is bubbly.",
      imageUrl: "../../../assets/images/vegetablePizza.png"
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes topped with butter and maple syrup.",
      ingredients: [
        "1 1/2 cups All-Purpose Flour",
        "1 tbsp Baking Powder",
        "1 tbsp Sugar",
        "1/2 tsp Salt",
        "1 1/4 cups Milk",
        "1 large Egg",
        "3 tbsp Butter, melted",
        "Maple Syrup and Butter for serving"
      ],
      instructions: 
        "1. In a large bowl, whisk together flour, baking powder, sugar, and salt. \n" +
        "2. In another bowl, whisk together milk, egg, and melted butter. \n" +
        "3. Pour the wet ingredients into the dry ingredients and stir until just combined. \n" +
        "4. Heat a griddle or frying pan over medium heat and lightly grease it. \n" +
        "5. Pour 1/4 cup of batter onto the griddle for each pancake. \n" +
        "6. Cook until bubbles form on the surface, then flip and cook until golden brown. \n" +
        "7. Serve hot with butter and maple syrup.",
      imageUrl: "../../../assets/images/pancake.png"
    },
    {
      name: "Italian Salad",
      description: "A fresh and light salad with grilled chicken and mixed greens.",
      ingredients: [
        "2 Chicken Breasts",
        "4 cups Mixed Greens (Lettuce, Spinach, Arugula)",
        "1 cup Cherry Tomatoes, halved",
        "1/2 cup Cucumber, sliced",
        "1/4 cup Red Onion, thinly sliced",
        "1/4 cup Parmesan Cheese, shaved",
        "1/4 cup Italian Dressing",
        "Salt and Pepper to taste"
      ],
      instructions: 
        "1. Season chicken breasts with salt and pepper, then grill until fully cooked. \n" +
        "2. Let the chicken rest, then slice into strips. \n" +
        "3. In a large bowl, combine mixed greens, cherry tomatoes, cucumber, and red onion. \n" +
        "4. Top the salad with grilled chicken and shaved Parmesan cheese. \n" +
        "5. Drizzle with Italian dressing and toss to coat. Serve immediately.",
      imageUrl: "../../../assets/images/italianSalad.png"
    }
  ],
  dessert: [
    {
      name: "Chocolate Cake",
      description: "A rich and moist chocolate cake with creamy chocolate frosting.",
      ingredients: [
        "1 3/4 cups All-Purpose Flour",
        "3/4 cup Cocoa Powder",
        "1 1/2 tsp Baking Powder",
        "1 1/2 tsp Baking Soda",
        "1 tsp Salt",
        "2 cups Sugar",
        "2 large Eggs",
        "1 cup Whole Milk",
        "1/2 cup Vegetable Oil",
        "2 tsp Vanilla Extract",
        "1 cup Boiling Water"
      ],
      instructions: 
        "1. Preheat oven to 180°C (350°F). Grease and flour two 9-inch round baking pans. \n" +
        "2. In a large bowl, stir together flour, cocoa powder, baking powder, baking soda, and salt. \n" +
        "3. Add sugar, eggs, milk, oil, and vanilla extract to the dry ingredients and beat on medium speed until smooth. \n" +
        "4. Stir in boiling water (batter will be thin). \n" +
        "5. Pour batter evenly into prepared pans. \n" +
        "6. Bake for 30 to 35 minutes, or until a toothpick inserted in the center comes out clean. \n" +
        "7. Cool in pans for 10 minutes, then remove from pans and cool completely on wire racks. \n" +
        "8. Frost with your favorite chocolate frosting and serve.",
      imageUrl: "../../../assets/images/cake.png"
    }
  ],
  snacks: [
    {
      name: "Granola Bars",
      description: "Healthy homemade granola bars packed with oats, nuts, and dried fruits.",
      ingredients: [
        "2 cups Rolled Oats",
        "1/2 cup Honey",
        "1/2 cup Mixed Nuts, chopped",
        "1/2 cup Dried Fruits, chopped",
        "1/4 cup Peanut Butter",
        "1/2 tsp Vanilla Extract",
        "Pinch of Salt"
      ],
      instructions: 
        "1. Preheat oven to 180°C (350°F). Line a baking pan with parchment paper. \n" +
        "2. In a large bowl, mix together oats, nuts, and dried fruits. \n" +
        "3. In a small saucepan, warm honey and peanut butter over low heat until melted and combined. \n" +
        "4. Remove from heat and stir in vanilla extract and salt. \n" +
        "5. Pour the honey mixture over the oat mixture and stir until fully coated. \n" +
        "6. Press the mixture firmly into the prepared pan. \n" +
        "7. Bake for 20-25 minutes or until golden brown. \n" +
        "8. Let cool completely before cutting into bars.",
      imageUrl: "../../../assets/images/granola.png"
    }
  ],
  pastries: [
    {
      name: "Croissants",
      description: "Buttery, flaky croissants made with layers of dough and butter.",
      ingredients: [
        "2 1/4 cups All-Purpose Flour",
        "1/4 cup Sugar",
        "1 tsp Salt",
        "2 1/4 tsp Active Dry Yeast",
        "3/4 cup Whole Milk, warm",
        "1 cup Unsalted Butter, chilled and sliced",
        "1 large Egg, beaten (for egg wash)"
      ],
      instructions: 
        "1. In a large bowl, mix together flour, sugar, and salt. \n" +
        "2. Dissolve yeast in warm milk and add to the dry ingredients. Knead until a smooth dough forms. \n" +
        "3. Roll the dough into a rectangle and place slices of chilled butter over two-thirds of the dough. \n" +
        "4. Fold the dough into thirds (like a letter) and chill for 30 minutes. \n" +
        "5. Roll out and fold the dough three more times, chilling between each fold. \n" +
        "6. Roll out the dough and cut it into triangles. Roll each triangle into a crescent shape. \n" +
        "7. Place croissants on a baking sheet, cover, and let rise until doubled in size. \n" +
        "8. Preheat oven to 200°C (400°F). Brush croissants with egg wash. \n" +
        "9. Bake for 15-20 minutes or until golden brown. Cool slightly before serving.",
      imageUrl: "../../../assets/images/croissants.png"
    }
  ],
  beverages: [
    {
      name: "Lemonade",
      description: "A refreshing and tangy homemade lemonade.",
      ingredients: [
        "1 cup Fresh Lemon Juice (about 4-6 lemons)",
        "1/2 cup Sugar",
        "4 cups Cold Water",
        "Lemon Slices and Mint Leaves for garnish"
      ],
      instructions: 
        "1. In a small saucepan, combine lemon juice and sugar. Heat over medium heat until sugar dissolves completely. \n" +
        "2. Remove from heat and let the lemon syrup cool. \n" +
        "3. In a large pitcher, combine the lemon syrup with cold water. Stir well. \n" +
        "4. Serve over ice and garnish with lemon slices and mint leaves.",
      imageUrl: "../../../assets/images/lemonade.png"
    }
  ]
};

export default recipes;
