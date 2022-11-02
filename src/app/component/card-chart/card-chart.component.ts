import { Component, OnInit } from "@angular/core";
import Chart from "chart.js/auto";

@Component({
  selector: "app-card-chart",
  templateUrl: "./card-chart.component.html",
  styleUrls: ["./card-chart.component.scss"]
})
export class CardChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: "bar", //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["Graphic", "Theme","Template",], 
	       datasets: [
          {
            label: "Graphic",
            data: ["4607", "4607", "4607"],
            backgroundColor: "#6C5DD3"
          },
          {
            label: "Theme",
            data: ["5420", "5420", "5420"],
            backgroundColor: "#A0D7E7"
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
