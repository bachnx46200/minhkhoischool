import { Component, OnInit } from '@angular/core';
import { Tintuc } from '../models/tintuc';
import { TintucService } from '../service/tintuc.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {
  tthoctap: Tintuc;
  tthoatdong:Tintuc;
  constructor(private tintucService: TintucService) { }

  ngOnInit(): void {
    this.loadhoctap();
    this.loadhoatdong();
  }

  public loadhoctap() {
    this.tintucService.listhoctap().subscribe(
      data => this.tthoctap = data
    )
  }
  public loadhoatdong() {
    this.tintucService.listhoatdong().subscribe(
      data => this.tthoatdong = data
    )
  }

}
