import { Component } from '@angular/core';
import { DrillOperationService } from './drill-operation.service';
import { DrillOperation } from './DrillOperation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = false;
  drillOperations: DrillOperation[] | undefined;
  newDrillOperation: DrillOperation = new DrillOperation();
  selectedDrillOperation: DrillOperation = new DrillOperation();

  constructor(private drillOperationService: DrillOperationService) { }
}

