import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public title = new BehaviorSubject<string>('');
  constructor(private router: Router) {}
  getTitle(): Observable<string> {
    return this.title.asObservable();
  }
  headerInit() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationStart
        ),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle: string = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        console.log(title);
        if (title) {
          this.title.next(title);
        } else {
          this.title.next('');
        }
      });
  }
}
