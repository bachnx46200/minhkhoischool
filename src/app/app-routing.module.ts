import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DaotaoComponent } from './daotao/daotao.component';
import { QlhoadongComponent } from './dt_page/qlhoadong/qlhoadong.component';
import { QlhoctapComponent } from './dt_page/qlhoctap/qlhoctap.component';
import { DaotaoGuardService as guard } from './guards/daotao-guard.service';
import { HocsinhComponent } from './hocsinh/hocsinh.component';
import { BangdiemComponent } from './hs_page/bangdiem/bangdiem.component';
import { KqcuoinamComponent } from './hs_page/kqcuoinam/kqcuoinam.component';
import { PhanhoiHsComponent } from './hs_page/phanhoi-hs/phanhoi-hs.component';
import { DsphanhoiHsComponent } from './hs_page/phanhoi-hs/dsphanhoi-hs/dsphanhoi-hs.component';
import { TraloiHsComponent } from './hs_page/phanhoi-hs/traloi-hs/traloi-hs.component';
import { GuiphHsComponent } from './hs_page/phanhoi-hs/guiph-hs/guiph-hs.component';
import { ChinhsuattComponent } from './dt_page/chinhsuatt/chinhsuatt.component';
import { GiaovienComponent } from './giaovien/giaovien.component';
import { ThemmoittComponent } from './dt_page/themmoitt/themmoitt.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Error403Component } from './notfound/error403/error403.component';
import { BangiamhieuComponent } from './bangiamhieu/bangiamhieu.component';
import { QlytaikhoanComponent } from './bgh_page/qlytaikhoan/qlytaikhoan.component';
import { TkgiaovienComponent } from './bgh_page/tkgiaovien/tkgiaovien.component';
import { QlylophocComponent } from './dt_page/qlylophoc/qlylophoc.component';
import { CttintucComponent } from './cttintuc/cttintuc.component';
import { HomeComponent } from './home/home.component';
import { GioithieuComponent } from './home/gioithieu/gioithieu.component';
import { LienheComponent } from './home/lienhe/lienhe.component';
import { TintucComponent } from './home/tintuc/tintuc.component';
const routes: Routes = [
  { path: 'dang-nhap', component: DangnhapComponent },
  
  { path: '', redirectTo: 'dang-nhap', pathMatch: 'full' },
  {
    path: 'minhkhoischool', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TintucComponent },
      { path: 'gioi-thieu', component: GioithieuComponent },
      { path: 'lien-he', component: LienheComponent },
    ]
  },

  

  {
    path: 'dao-tao', component: DaotaoComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TrangchuComponent },
      { path: 'quan-ly-hoat-dong', component: QlhoadongComponent },
      { path: 'quan-ly-hoc-tap', component: QlhoctapComponent },
      { path: 'them-moi-tin-tuc', component: ThemmoittComponent },
      { path: 'quan-ly-lop-hoc', component: QlylophocComponent },
      { path: 'chi-tiet-tin-tuc/:id', component: ChinhsuattComponent },
    ], canActivate: [guard], data: { expectedRol: ['daotao'] }
  },

  {
    path: 'hoc-sinh', component: HocsinhComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TrangchuComponent },
      { path: 'bang-diem', component: BangdiemComponent },
      { path: 'ket-qua-cuoi-nam', component: KqcuoinamComponent },
      { path: 'gui-phan-hoi', component: GuiphHsComponent },
      { path: 'trang-chu/tin-tuc/:id', component: CttintucComponent },
    ], canActivate: [guard], data: { expectedRol: ['hocsinh'] }
  },
  {
    path: 'giao-vien', component: GiaovienComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TrangchuComponent },

    ], canActivate: [guard], data: { expectedRol: ['giaovien'] }
  },
  {
    path: 'ban-giam-hieu', component: BangiamhieuComponent,
    children: [
      { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
      { path: 'trang-chu', component: TrangchuComponent },
      {
        path: 'quan-ly-tai-khoan', component: QlytaikhoanComponent,
        children: [
          { path: 'tai-khoan-giao-vien', component: TkgiaovienComponent },
          { path: 'chi-tiet-phan-hoi', component: TraloiHsComponent },

        ]
      },
      
    ], canActivate: [guard], data: { expectedRol: ['bangiamhieu'] }
  },
  { path: 'error-403', component: Error403Component},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
