import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLandListComponent } from './my-land-list/my-land-list.component';
import { PagesSharedModule } from "../pages-shared/pages-shared.module";
import { MyLandRoutingModule } from "./my-land-routing.module";


@NgModule({
  declarations: [
    MyLandListComponent,
  ],
  imports: [
    CommonModule, PagesSharedModule, MyLandRoutingModule
  ]
})
export class MyLandModule { }
