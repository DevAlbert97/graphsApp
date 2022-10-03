import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.sass'],
})
export class BarsComponent {
  
  proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];
  charDataType: ChartType = 'bar';

  proveedoresData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ],
  };
}
