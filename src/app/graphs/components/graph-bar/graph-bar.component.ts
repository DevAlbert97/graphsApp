import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.sass'],
})
export class GraphBarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barCharData!: ChartData;
  @Input() barChartType!: ChartType;
  @Input() barChartOptions: ChartConfiguration['options'];


  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

  public randomize(): void {
    for (let i = 0; i < this.barCharData.datasets.length; i++) {
      this.barCharData.datasets[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    }

    this.chart?.update();
  }
}
