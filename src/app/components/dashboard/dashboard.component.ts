import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
    selector: 'app-dashboard',
    standalone: true,
        templateUrl: 'dashboard.component.html',
        // styleUrls: ['./evenement.component.scss'],
        imports:[],
  
})
export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx: any;
  public chartColor: any;
  public chartHours: any;

  ngOnInit() {
    this.chartColor = "#FFFFFF";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: "#6bd098",
          borderColor: "#6bd098",
          borderWidth: 1,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354, 330, 326],
        },
        {
          label: 'Dataset 2',
          backgroundColor: "#f17e5d",
          borderColor: "#f17e5d",
          borderWidth: 1,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420, 370, 385],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "#9f9f9f"  // Couleur des étiquettes de la légende
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#9f9f9f",  // Remplace 'fontColor' par 'color'
            },
            grid: {
              color: 'rgba(255,255,255,0.05)'
            }
          },
          x: {
            // barPercentage: 0.7,
            ticks: {
              color: "#9f9f9f",  // Remplace 'fontColor' par 'color'
            },
            grid: {
              color: 'rgba(255,255,255,0.1)',
              // borderColor: "transparent"
            }
          }
        }
      }
    });
  }
}
