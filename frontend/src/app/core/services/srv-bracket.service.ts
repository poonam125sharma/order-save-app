import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bracket } from '../models/bracket.model';

const baseUrl = 'http://localhost:8080/api/brackets';

@Injectable({
  providedIn: 'root'
})
export class SrvBracketService {

  brackets: Bracket[] = new Array<Bracket>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAllBrackets(): Observable<any> {
    // return this.brackets;
    return this.http.get(baseUrl);
  }

  getBracket(id: string): Observable<any> {
    /*const rtVal = this.brackets.filter(bkt => {
      return bkt.id === id;
    });
    return (rtVal.length > 0) ? rtVal[0] : null;*/
    return this.http.get(`${baseUrl}/${id}`);
  }

  addBracket(bracket: Bracket): Observable<any> {
    // this.brackets.push(bracket);
    return this.http.post(baseUrl, bracket);
  }

  updateBracket(id: string, bracket: Bracket): Observable<any> {
    /*const rtVal = this.brackets.filter(bkt => {
      return bkt.id === id;
    });
    if (rtVal.length > 0) {
      const bkt = rtVal[0];
      bkt.id = bracket.id;
      bkt.info = bracket.info;
      bkt.date = bracket.date;
    }*/
    return this.http.put(`${baseUrl}/${id}`, bracket);
  }

  deleteBracket(id: string): Observable<any> {
    // const index = this.brackets.findIndex(x => x.id === id);
    // if (index !== undefined) { this.brackets.splice(index, 1); }
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
