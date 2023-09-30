import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public title = new BehaviorSubject<string>('');
  constructor(private router: Router) {}
  getTitle(): Observable<string> {
    return this.title.asObservable();
  }
}
