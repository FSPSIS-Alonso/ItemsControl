import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items/items.component';
import { ItemFormComponent } from './item-form/item-form.component';

//auth/....
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ItemsComponent },
      { path: 'item', component: ItemFormComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
