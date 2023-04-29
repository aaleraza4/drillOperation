import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {

  constructor(private _modalService: NgbModal) { }

  public openDialog(component: any, item?: any, modalOption?: any): Promise<any> {
    //this.refreshDateOnPageStatus(true);
    let modalOptions = {
      ariaLabelledBy: 'modal-basic-title', backdrop: 'static',
      keyboard: false,
      centered: true,
      ...modalOption // for custom option by component call
    };
    const dialog =
      this._modalService.open(component, modalOptions);

    if (item) {
      dialog.componentInstance.item = item;
    }
    return dialog.result;
    // .then((result) => {
    //   this.refreshDateOnPageStatus(false);
    //   return result;
    // }, (reason) => {
    //   this.refreshDateOnPageStatus(false);
    //   return reason;
    // });
  }
}
