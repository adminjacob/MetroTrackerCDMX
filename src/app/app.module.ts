import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordChangedPageModule } from './pages/password-changed/password-changed.module';
import { HttpClientModule } from '@angular/common/http';
import { FullScreenImageComponent } from './components/full-screen-image/full-screen-image.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [AppComponent, FullScreenImageComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        PasswordChangedPageModule,
        HttpClientModule,
        SwiperModule 
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
