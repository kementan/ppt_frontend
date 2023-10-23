import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MyLandListComponent } from "./my-land-list/my-land-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MyLandListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLandRoutingModule { }
