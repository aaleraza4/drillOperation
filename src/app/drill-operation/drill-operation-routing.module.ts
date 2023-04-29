import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrillformComponent } from './drillform/drillform.component';
import { DrillChartComponent } from './drill-chart/drill-chart.component';
import { DrillOperationComponent } from './drill-operation/drill-operation.component';

const routes: Routes = [
  { path: '', component: DrillOperationComponent },
  { path: 'crud', component: DrillChartComponent },
  { path: 'chart', component: DrillOperationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrillOperationRoutingModule {}