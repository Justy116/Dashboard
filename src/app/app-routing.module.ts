import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const routes: Routes = [
  {path: "home", component: SidebarComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
