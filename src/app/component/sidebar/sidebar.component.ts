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
    {img: "../../../assets/icon/Overview.svg", imgLight: "../../../assets/icon/Overview-white.svg", name:"Overview", notification: 10, urlPage: "overview"},
    {img: "../../../assets/icon/Bag.svg", imgLight: "../../../assets/icon/Bag-white.svg", name:"Products", notification: 0, urlPage: "products"},
    {img: "../../../assets/icon/Chart.svg", imgLight: "../../../assets/icon/Chart-white.svg", name:"Campaigns", notification: 0, urlPage: "campaigns"},
    {img: "../../../assets/icon/Discovery.svg", imgLight: "../../../assets/icon/Discovery-white.svg", name:"Schedules", notification: 0, urlPage: "schedules"},
    {img: "../../../assets/icon/Wallet.svg", imgLight: "../../../assets/icon/Wallet-white.svg", name:"Payouts", notification: 0, urlPage: "payout"},
    {img: "../../../assets/icon/Document.svg", imgLight: "../../../assets/icon/Document-white.svg", name:"Statement", notification: 0, urlPage: "statements"},
    {img: "../../../assets/icon/Setting.svg", imgLight: "../../../assets/icon/Setting-white.svg", name:"Settings", notification: 0, urlPage: "accountSetting"},
  ]

  dataSidebarDown = [
    {img: "../../../assets/icon/Message.svg", imgLight: "../../../assets/icon/Message-white.svg", name:"Inbox", notification: 3, urlPage: "inbox"},
    {img: "../../../assets/icon/Notification.svg", imgLight: "../../../assets/icon/Notification-white.svg", name:"Notifications", notification: 32, urlPage: "notification"},
    {img: "../../../assets/icon/Chat.svg", imgLight: "../../../assets/icon/Chat-white.svg", name:"Comments", notification: 1, urlPage: "comment"},
  ]

  iconMenu = true;
  textMenu = true;
  notification = true;
  toggleMenu(){
    this.iconMenu = !this.iconMenu;
    this.textMenu = !this.textMenu;
    this.notification = !this.notification;
  }
}
