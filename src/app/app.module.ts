import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenusComponent } from './components/navmenus/navmenus.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler) {
    const xhr = httpRequest.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest'),
    });

    return httpHandler.handle(xhr);
  }
}
