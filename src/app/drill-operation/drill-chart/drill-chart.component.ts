import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DrillOperation } from 'src/app/DrillOperation';
import { DrillOperationService } from 'src/app/drill-operation.service';
import { ModalserviceService } from 'src/app/modalservice.service';
import { DrillformComponent } from '../drillform/drillform.component';

@Component({
  selector: 'app-drill-chart',
  templateUrl: './drill-chart.component.html'
})
export class DrillChartComponent {
  constructor(
    private chartApiService: DrillOperationService,
    private modalService: ModalserviceService,

  ) {}
  isVisible = false;
  listOfData: DrillOperation[] = [];
  _item = new BehaviorSubject<any>('');
  _modelTitle = new BehaviorSubject<any>('');
  /// Data members ends
  ngOnInit(): void {
    this.onLoadData();
  }

  // Data handlers

  private onLoadData(): void {
    this.chartApiService.getAll().subscribe((x:any) => {
      this.listOfData = x;
    });
  }

  addModal() {
    let modalReference = this.modalService.openDialog(DrillformComponent,null);
    modalReference.then((success) => {
      if (success) {
        this.onLoadData();
      }
    });
  }

  updateModal(Id: any) {
    this.chartApiService.edit(Id).subscribe(
      x => {
        let modalReference = this.modalService.openDialog(DrillformComponent, x);
          modalReference.then((success) => {
            if (success) {
              this.onLoadData();
            }
          });
      });
  }

  delete(Id: any){
    this.chartApiService.delete(Id).subscribe(
      (x:any) => {
        if(x == true){
          this.onLoadData();
        }
      });
  }
}
