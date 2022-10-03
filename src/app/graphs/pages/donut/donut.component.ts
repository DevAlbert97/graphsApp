import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.sass'],
})
export class DonutComponent {

  public barCharOptions: ChartConfiguration['options'] = {
    responsive: true,
  }

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Phone Sales',
    'Message Sales',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: '#1A6CF0',
      },
      {
        data: [50, 150, 120],
        backgroundColor: '#F04AA7',
      },
      { 
        data: [250, 130, 70], 
        backgroundColor: '#327BF0',
      },
      { 
        data: [175, 95, 285], 
        backgroundColor: '#F0AA1A', 
      },
      { 
        data: [485, 165, 425], 
        backgroundColor: '#2FF026', 
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
