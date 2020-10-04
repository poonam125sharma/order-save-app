import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { SrvBracketService } from 'src/app/core/services/srv-bracket.service';

@Component({
  selector: 'app-bracket-card',
  templateUrl: './bracket-card.component.html',
  styleUrls: ['./bracket-card.component.scss']
})
export class BracketCardComponent implements OnInit {
  @Input() id: string;
  @Input() info: string;
  @Input() date: any;

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodytext', {static: true}) bodytext: ElementRef<HTMLElement>;

  constructor(
    private renderer: Renderer2,
    private bracketService: SrvBracketService
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
    this.bracketService.deleteBracket(id);
  }

}
