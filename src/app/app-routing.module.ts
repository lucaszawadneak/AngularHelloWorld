import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ListComponent } from "./views/list/list.component";
import { AddComponent } from "./views/add/add.component";
import { EditComponent } from "./views/edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "add",
    component: AddComponent,
  },
  {
    path: "edit",
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
