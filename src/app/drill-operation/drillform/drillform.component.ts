import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrillOperation } from 'src/app/DrillOperation';
import { DrillOperationService } from 'src/app/drill-operation.service';

@Component({
  selector: 'app-drillform',
  templateUrl: './drillform.component.html',
  styleUrls: ['./drillform.component.css']
})
export class DrillformComponent {

  constructor(public activeModal: NgbActiveModal,
    private fb: UntypedFormBuilder,
    private chartService: DrillOperationService) { }
  drillform!: UntypedFormGroup;
  isEditMode: boolean = false;
  drillModel!: DrillOperation;
  private itemid: number = 0;
  @Output() newItemEvent = new EventEmitter();
  @Input() _item = new BehaviorSubject<any>('');
  @Input() item: any;
  ngOnInit(): void {
    this.drillform = this.fb.group({
      'id': new UntypedFormControl(0),
      'name': new UntypedFormControl(null, [Validators.required]),
      'start': new UntypedFormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
      'end': new UntypedFormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')])
    });
    this.patchFormOnUpdate();
  }

  
  onSubmit() {
    // submit form
    this.drillModel = new DrillOperation;
    this.drillModel.id = this.drillform.get('id')?.value;
    this.drillModel.startInterval = this.drillform.get('start')?.value;
    this.drillModel.endInterval = this.drillform.get('end')?.value;
    this.drillModel.eventName = this.drillform.get('name')?.value;
    this.drillModel.eventType = 1;

    this.decideAction().subscribe(
      x => {
       if(x?.ok == true){
        this.activeModal.close(true);
       }else{
        this.activeModal.close(true);
       }
      });
  }

  patchFormOnUpdate() {
    if (this.item != undefined) {
      this.drillform.controls['id'].setValue(this.item.id);
      this.drillform.controls['name'].setValue(this.item.eventName);
      this.drillform.controls['start'].setValue(this.item.startInterval);
      this.drillform.controls['end'].setValue(this.item.endInterval);
    }
  }

  decideAction():Observable<any>{
    if (this.drillModel.id == undefined || this.drillModel.id == 0) {
      return this.chartService.create(this.drillModel);
    }
    else {
      return this.chartService.update(this.drillModel);
    }
  }

  closeModal() {
    this.activeModal.close(false);
  }
}


