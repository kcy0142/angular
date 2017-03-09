import { Component,  Input,  OnInit} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'tb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  host: { '(document:keyup)': 'keyup($event)' }
})
export class ModalComponent implements OnInit {

  @Input('modal-id') modalId: string;
    @Input('modal-title') modalTitle: string;
    @Input() blocking = false;
    isOpen: boolean = false;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.modalService.registerModal(this);
    }

    private close(checkBlocking = false): void {
        this.modalService.close(this.modalId, checkBlocking);
    }

    private keyup(event: KeyboardEvent): void {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    }
}
