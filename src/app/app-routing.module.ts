import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { CommentComponent } from './pages/comment/comment.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PayoutsComponent } from './pages/payouts/payouts.component';
import { ProductsComponent } from './pages/products/products.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { StatementsComponent } from './pages/statements/statements.component';

const routes: Routes = [
  {path: "test", component: SidebarComponent},
  {path: "overview", component: OverviewComponent},
  {path: "products", component: ProductsComponent},
  {path: "campaigns", component: CampaignsComponent},
  {path: "schedules", component: SchedulesComponent},
  {path: "payout", component: PayoutsComponent},
  {path: "statements", component: StatementsComponent},
  {path: "inbox", component: InboxComponent},
  {path: "notification", component: NotificationComponent},
  {path: "comment", component: CommentComponent},
  {path: "accountSetting", component: AccountSettingComponent},
  { path: '',   redirectTo: 'test', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
