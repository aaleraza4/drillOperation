import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DrillOperationService } from 'src/app/drill-operation.service';

@Component({
  selector: 'app-drill-operation',
  templateUrl: './drill-operation.component.html'
})
export class DrillOperationComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: any = ['Data', 'Data'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any = [
    { data: [50], label: 'Series A', stack: 'a' },
    { data: [50], label: 'Series C', stack: 'a' },
    { data: [50], label: 'Series D', stack: 'a' },
    { data: [60], label: 'Series E', stack: 'a' },
  ];

  constructor(private apiService: DrillOperationService) {}

  ngOnInit() {
    this.apiService.getChart().subscribe((e) => {
      this.barChartData = e;
    });
  }
}
