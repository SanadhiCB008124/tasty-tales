import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path:'search/:recipe',
        component:SearchComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent

    },
    {
        path:'shop',
        component:ShopComponent
    },
    {
        path:'recipes',
        component:RecipesComponent
    },{
        path:'about',
        component:AboutComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },{
        path:'add-recipes',
        component:AddRecipeComponent
    }
   ,
   { path: 'recipe/:category/:name', component: ProductComponent },
];
