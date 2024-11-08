import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ab-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewChecked {
  @Input() isOpen = false;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  ngAfterViewChecked(): void {
    if (this.isOpen) {
      this.modal.nativeElement.showModal();
    } else {
      this.modal.nativeElement.close();
    }
  }
}