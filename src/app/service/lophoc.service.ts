import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lop } from '../models/lop';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class LophocService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,) { }

    URL = 'http://35.213.128.4:8080/fpt/final/';
  public listlophoc(manguoidung: string): Observable<Lop> {
    let params = new HttpParams()
    .set('mahocsinh', manguoidung)
    return this.httpClient.get<Lop>(this.URL + `getClass`, {params: params});
  }
}
