import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IconsProviderModule } from './icons-provider.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';

import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DaotaoComponent } from './daotao/daotao.component';
import { QlhoadongComponent } from './dt_page/qlhoadong/qlhoadong.component';
import { QlhoctapComponent } from './dt_page/qlhoctap/qlhoctap.component';


import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { HocsinhComponent } from './hocsinh/hocsinh.component';
import { BangdiemComponent } from './hs_page/bangdiem/bangdiem.component';
import { KqcuoinamComponent } from './hs_page/kqcuoinam/kqcuoinam.component';
import { PhanhoiHsComponent } from './hs_page/phanhoi-hs/phanhoi-hs.component';
import { TraloiHsComponent } from './hs_page/phanhoi-hs/traloi-hs/traloi-hs.component';
import { DsphanhoiHsComponent } from './hs_page/phanhoi-hs/dsphanhoi-hs/dsphanhoi-hs.component';
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
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    TrangchuComponent,
    DaotaoComponent,
    QlhoadongComponent,
    QlhoctapComponent,
    HocsinhComponent,
    BangdiemComponent,
    KqcuoinamComponent,
    PhanhoiHsComponent,
    TraloiHsComponent,
    DsphanhoiHsComponent,
    GuiphHsComponent,
    ChinhsuattComponent,
    GiaovienComponent,
    ThemmoittComponent,
    NotfoundComponent,
    Error403Component,
    BangiamhieuComponent,
    QlytaikhoanComponent,
    TkgiaovienComponent,
    QlylophocComponent,
    CttintucComponent,
    HomeComponent,
    GioithieuComponent,
    LienheComponent,
    TintucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    AngularEditorModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN },interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
