import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SrvMsgTransferService } from 'src/app/core/services/srv-msg-transfer.service';
import { Bracket } from 'src/app/core/models/bracket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss']
})
export class BracketViewComponent implements OnInit, OnDestroy {

  bracketInfo: Bracket = null;
  bracketInfoSubscription: Subscription;
  @ViewChild('copyInfo', {static: false}) copyInfo: ElementRef;

  constructor(
    private msgTransferService: SrvMsgTransferService
  ) { }

  ngOnInit(): void {
    this.bracketInfoSubscription = this.msgTransferService.bracketInfo$.subscribe(value => {
      if (Object.keys(value).length > 0) {
        // const bktInfo = value;
        // console.log(value);
        // const info = JSON.parse(JSON.stringify(bktInfo.info));
        // console.log(info);
        // console.log(value.info.bracket_side);
        // bktInfo.info = JSON.parse(bktInfo.info);
        // console.log(typeof(bktInfo.info));
        // console.log(bktInfo.info.bracket_side);
        // this.bracketInfo = bktInfo;
        // console.log(this.bracketInfo);
        this.bracketInfo = value;
      }
    });
  }

  ngOnDestroy(): void {
    this.bracketInfo = null;
    this.bracketInfoSubscription.unsubscribe();
  }

  fun_Close_View(): void {
    this.bracketInfo = null;
  }

  fun_Copy_Info(value: any): void {
    this.copyInfo.nativeElement.value = value;
    this.copyInfo.nativeElement.select();
    document.execCommand('copy');
  }

}
