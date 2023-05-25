import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements AfterViewInit {
  @ViewChild('modalRef') modalRef!: ModalComponent;
  ngAfterViewInit(): void {
    console.log(this.modalRef)
  }
  openModal(): void {
    this.modalRef?.showModal();
  }
  
}
