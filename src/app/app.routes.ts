import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [

  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        title: "Home"
      },
      {
        path: "product",
        loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent),
        title: "Products"
      },
      {
        path: "categories",
        loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent),
        title: "Categories"
      },
      {
        path: "brands",
        loadComponent: () => import('./components/brands/brands.component').then(m => m.BrandsComponent),
        title: "Brands"
      },
      {
        path: "cart",
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent),
        title: "Cart"
      },
      {
        path: "details/:id",
        loadComponent: () => import('./components/details/details.component').then(m => m.DetailsComponent),
        title: "Product Details"
      },
      {
        path: "allorders",
        loadComponent: () => import('./components/allorders/allorders.component').then(m => m.AllordersComponent),
        title: "All Orders"
      },
      {
        path: "orders/:id",
        loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent),
        title: "Orders"
      },
      {
        path: "categoryDetails/:id",
        loadComponent: () => import('./components/category-details/category-details.component').then(m => m.CategoryDetailsComponent),
        title: "Category Details"
      },
    ]
  },

  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
        title: "Log in"
      },
      {
        path: "register",
        loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),
        title: "Register"
      },
      {
        path: "forgetPass",
        loadComponent: () => import('./components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent),
        title: "Forget Password"
      }
    ]
  },

  {
    path: "**",
    loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent)
  }
];
