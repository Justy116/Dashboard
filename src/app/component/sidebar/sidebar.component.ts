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
    {img: "../../../assets/icon/Overview.svg",name:"Overview", notification: ""},
    {img: "../../../assets/icon/Bag.svg",name:"Products", notification: ""},
    {img: "../../../assets/icon/Chart.svg",name:"Campaigns", notification: ""},
    {img: "../../../assets/icon/Discovery.svg",name:"Schedules", notification: ""},
    {img: "../../../assets/icon/Wallet.svg",name:"Payouts", notification: ""},
    {img: "../../../assets/icon/Document.svg",name:"Statement", notification: ""},
    {img: "../../../assets/icon/Setting.svg",name:"Settings", notification: ""},
  ]

  dataSidebarDown = [
    {img: "../../../assets/icon/Message.svg",name:"Inbox", notification: 3},
    {img: "../../../assets/icon/Notification.svg",name:"Notifications", notification: 32},
    {img: "../../../assets/icon/Chat.svg",name:"Comments", notification: 10},
  ]

}
