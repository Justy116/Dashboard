import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { PayoutsComponent } from './pages/payouts/payouts.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OverviewComponent,
    ProductsComponent,
    CampaignsComponent,
    SchedulesComponent,
    PayoutsComponent,
    StatementsComponent,
    InboxComponent,
    NotificationComponent,
    CommentComponent,
    AccountSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
