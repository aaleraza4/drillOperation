import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillformComponent } from './drillform/drillform.component';
import { DrillChartComponent } from './drill-chart/drill-chart.component';
import { DrillOperationComponent } from './drill-operation/drill-operation.component';
import { NgChartsModule } from 'ng2-charts';
import { DrillOperationRoutingModule } from './drill-operation-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DrillformComponent,
    DrillChartComponent,
    DrillOperationComponent
  ],
  imports: [
    NgChartsModule,
    CommonModule,
    DrillOperationRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzInputModule,
    NzGridModule,
    ReactiveFormsModule,
  ]
})
export class DrillOperationModule { }
