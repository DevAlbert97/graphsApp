import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styleUrls: ['./double-bars.component.sass'],
})
export class DoubleBarsComponent {

  proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];
  charDataType : ChartType = 'bar';

  proveedoresData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ],
  };

  productoData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Carros',
        backgroundColor: 'blue',
      },
    ],
  };
}
