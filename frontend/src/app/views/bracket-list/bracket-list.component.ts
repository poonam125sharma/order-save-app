import { Component, OnInit } from '@angular/core';
import { Bracket } from 'src/app/core/models/bracket.model';
import { SrvBracketService } from 'src/app/core/services/srv-bracket.service';
import { SrvMsgTransferService } from './../../core/services/srv-msg-transfer.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-bracket-list',
  templateUrl: './bracket-list.component.html',
  styleUrls: ['./bracket-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      // ENTRY ANIMATION
      transition('void => *', [
        // Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          // we have to 'expand' out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        // we first want to animate the spacing (which includes height and margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(68)
      ]),

      transition('* => void', [
        // first scale up
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        // then scale down back to normal size while beginning to fade out
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        // scale down and fade out completely
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        })),
        // then animate the spacing (which includes height, margin and padding)
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': '0',
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class BracketListComponent implements OnInit {

  bktList: Bracket[];

  constructor(
    private bracketService: SrvBracketService,
    private msgTransferService: SrvMsgTransferService
  ) { }

  ngOnInit() {
    this.fun_Get_Brackets_List();
  }

  fun_Get_Brackets_List() {
    this.bracketService.getAllBrackets().subscribe((response) => {
      if (response && response.status === 'true') {
        this.bktList = response.data;
      }
    });
  }

  fun_Delete_Bracket($event: any) {
    this.bracketService.deleteBracket($event).subscribe((response) => {
      if (response && response.status === 'true') {
        this.fun_Get_Brackets_List();
      }
    });
  }

  fun_View_Bracket($event: any) {
    this.bracketService.getBracket($event).subscribe((response) => {
      if (response && response.status === 'true') {
        this.msgTransferService.initBracketInfo(response.data);
      }
    });
  }

}
