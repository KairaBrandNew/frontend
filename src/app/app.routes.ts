import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterDisplayProductComponent } from './components/filter-display-product/filter-display-product.component';
import { AddUpdateProductItemComponent } from './components/add-update-clothing-item/add-update-clothing-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { CancellationAndRefundPolicyComponent } from './components/cancellation-and-refund-policy/cancellation-and-refund-policy.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'all-products', component: FilterDisplayProductComponent},
    {path: 'add-product-list', component: AddUpdateProductItemComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'terms & condition', component: TermsAndConditionComponent},
    {path: 'cancellation-refundPolicy', component: CancellationAndRefundPolicyComponent}
];
