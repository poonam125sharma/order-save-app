import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(
    private msgTransferService: SrvMsgTransferService
  ) { }

  ngOnInit(): void {
    this.bracketInfoSubscription = this.msgTransferService.bracketInfo$.subscribe(value => {
      this.bracketInfo = value;
    });
  }

  ngOnDestroy(): void {
    this.bracketInfo = null;
    this.bracketInfoSubscription.unsubscribe();
  }

  fun_Close_View(): void {
    this.bracketInfo = null;
  }

}
