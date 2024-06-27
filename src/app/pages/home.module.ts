import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from '../shared/header-menu/header-menu.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemsComponent } from './items/items.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [HomeComponent, ItemsComponent, ItemFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderMenuComponent,
    TableModule,
    DropdownModule,
    ButtonModule,
    FloatLabelModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
  ],
})
export class HomeModule {}
