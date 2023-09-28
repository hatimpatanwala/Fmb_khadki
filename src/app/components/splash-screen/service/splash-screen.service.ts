import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  private renderer: Renderer2;
  public isSplashScreen = new BehaviorSubject<boolean>(true);
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  getSplashScreen(): Observable<boolean> {
    return this.isSplashScreen.asObservable();
  }
  hide(): void {
    this.isSplashScreen.next(false);
  }
}
