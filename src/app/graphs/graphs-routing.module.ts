import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent } from './pages/bars/bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { HttpDonutComponent } from './pages/http-donut/http-donut.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'barras', component: BarsComponent},
      {path: 'doble-barras', component: DoubleBarsComponent},
      {path: 'dona', component: DonutComponent},
      {path: 'dona-http', component: HttpDonutComponent},
      {path: '**', redirectTo: 'barras'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
