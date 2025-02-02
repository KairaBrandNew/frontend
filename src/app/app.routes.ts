import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterDisplayProductComponent } from './components/filter-display-product/filter-display-product.component';
import { AddUpdateProductItemComponent } from './components/add-update-clothing-item/add-update-clothing-item.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'product', component: ProductCardComponent},
    {path: 'product-list', component: FilterDisplayProductComponent},
    {path: 'add-product-list', component: AddUpdateProductItemComponent}
];
