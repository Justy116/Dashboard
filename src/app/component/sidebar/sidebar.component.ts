import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSidebarUp = [
    {img: "../../../assets/icon/Overview.svg",name:"Overview", notification: "", urlPage: ""},
    {img: "../../../assets/icon/Bag.svg",name:"Products", notification: "", urlPage: "products"},
    {img: "../../../assets/icon/Chart.svg",name:"Campaigns", notification: "", urlPage: "campaigns"},
    {img: "../../../assets/icon/Discovery.svg",name:"Schedules", notification: "", urlPage: "schedules"},
    {img: "../../../assets/icon/Wallet.svg",name:"Payouts", notification: "", urlPage: "payout"},
    {img: "../../../assets/icon/Document.svg",name:"Statement", notification: "", urlPage: "statements"},
    {img: "../../../assets/icon/Setting.svg",name:"Settings", notification: "", urlPage: "accountSetting"},
  ]

  dataSidebarDown = [
    {img: "../../../assets/icon/Message.svg",name:"Inbox", notification: 3, urlPage: "inbox"},
    {img: "../../../assets/icon/Notification.svg",name:"Notifications", notification: 32, urlPage: "notification"},
    {img: "../../../assets/icon/Chat.svg",name:"Comments", notification: 10, urlPage: "comment"},
  ]

}
