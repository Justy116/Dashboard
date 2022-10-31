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
    {img: "../../../assets/icon/Overview.svg",name:"Overview"},
    {img: "../../../assets/icon/Bag.svg",name:"Products"},
    {img: "../../../assets/icon/Chart.svg",name:"Campaigns"},
    {img: "../../../assets/icon/Discovery.svg",name:"Schedules"},
    {img: "../../../assets/icon/Wallet.svg",name:"Payouts"},
    {img: "../../../assets/icon/Document.svg",name:"Statement"},
    {img: "../../../assets/icon/Setting.svg",name:"Settings"},
  ]

  dataSidebarDown = [
    {img: "../../../assets/icon/Bag.svg",name:"Inbox"},
    {img: "../../../assets/icon/Bag.svg",name:"Notifications"},
    {img: "../../../assets/icon/Bag.svg",name:"Comments"},
  ]

}
