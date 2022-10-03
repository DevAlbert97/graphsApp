import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-http-donut',
  templateUrl: './http-donut.component.html',
  styleUrls: ['./http-donut.component.sass'],
})
export class HttpDonutComponent implements OnInit {

  public barCharOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public chartType: ChartType = 'doughnut';

  public doughnutChartLabels: string[] = [];
  
  constructor(private graphService: GraphsService) {}
  
  ngOnInit(): void {
    // this.graphService.getSocialNetUsers().subscribe((data) => {
    //   this.doughnutChartLabels = Object.keys(data);
    //   this.chartData = {
    //     labels: Object.keys(data),
    //     datasets: [{ data: Object.values(data) }],
    //   };
    // });

    this.graphService.getUsersForDonut().subscribe( ({labels, values}) => {
      this.doughnutChartLabels = labels;
      this.chartData = {
        labels: labels,
        datasets: [{data: values}]
      };
    })
  }
  

  public chartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
}
  
