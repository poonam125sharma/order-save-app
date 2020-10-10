import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bracket-card',
  templateUrl: './bracket-card.component.html',
  styleUrls: ['./bracket-card.component.scss']
})
export class BracketCardComponent implements OnInit {
  @Input() id: string;
  @Input() info: string;
  @Input() date: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodytext', {static: true}) bodytext: ElementRef<HTMLElement>;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const style = window.getComputedStyle(this.bodytext.nativeElement, null);
    const visibleHeight = parseInt(style.getPropertyValue('height'), 10);

    if (this.bodytext.nativeElement.scrollHeight > visibleHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  fun_Delete_Bracket(id: string) {
    this.delete.emit(id);
  }

  fun_View_Bracket(id: string) {
    this.view.emit(id);
  }

}
