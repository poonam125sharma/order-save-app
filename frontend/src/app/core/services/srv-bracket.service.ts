import { Injectable } from '@angular/core';
import { Bracket } from '../models/bracket.model';

@Injectable({
  providedIn: 'root'
})
export class SrvBracketService {

  brackets: Bracket[] = new Array<Bracket>();

  constructor() {
  }

  getAllBrackets() {
    return this.brackets;
  }

  getBracket(id: string) {
    const rtVal = this.brackets.filter(bkt => {
      return bkt.id === id;
    });
    return (rtVal.length > 0) ? rtVal[0] : null;
  }

  addBracket(bracket: Bracket) {
    this.brackets.push(bracket);
  }

  updateBracket(id: string, bracket: Bracket) {
    const rtVal = this.brackets.filter(bkt => {
      return bkt.id === id;
    });
    if (rtVal.length > 0) {
      const bkt = rtVal[0];
      bkt.id = bracket.id;
      bkt.info = bracket.info;
      bkt.date = bracket.date;
    }
  }

  deleteBracket(id: string) {
    const index = this.brackets.findIndex(x => x.id === id);
    if (index !== undefined) { this.brackets.splice(index, 1); }
  }

}
