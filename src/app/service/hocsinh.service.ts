import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hocsinh } from '../models/hocsinh';
@Injectable({
  providedIn: 'root'
})
export class HocsinhService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,) { }


    productoURL = 'http://35.213.128.4:8080/fpt/final/';
  public detail(manguoidung: string): Observable<Hocsinh> {
    return this.httpClient.get<Hocsinh>(this.productoURL + `hocsinh/${manguoidung}`);
  }
}
