import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path: '',redirectTo: '/Header',pathMatch: 'full'},
  {path:'Footer',component:FooterComponent},
  {path:'Product',component:ProductComponent},
  {path:'Contact',component:ContactComponent}, 
  {path:'userHome',component:UserHomeComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'updateItem',component:UpdateItemComponent},
  {path:'itemCreate',component:ItemCreateComponent},
  {path:'Register',component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
