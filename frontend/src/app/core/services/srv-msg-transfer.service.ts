import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bracket } from './../models/bracket.model';

@Injectable({
  providedIn: 'root'
})
export class SrvMsgTransferService {

  private bracket = new Bracket();
  bracketInfo$ = new BehaviorSubject<Bracket>(this.bracket);

  initBracketInfo(bracket: Bracket) {
    this.bracketInfo$.next(bracket);
  }

  constructor() { }
}
