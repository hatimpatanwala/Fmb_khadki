import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { take, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { PromptComponent } from '../components/prompt/prompt.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
@Injectable({
  providedIn: 'root',
})
export class PwaService {
  promptEvent: any;
  promptEventCompleted$ = new BehaviorSubject<boolean>(false);
  constructor(
    private platform: Platform,
    private bottomSheet: MatBottomSheet
  ) {}
  public initPwaPrompt() {
    // alert(this.platform.ANDROID)
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        // alert("I am here")
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode =
        'standalone' in window.navigator && window.navigator['standalone'];
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    this.bottomSheet.open(PromptComponent, {
      data: { mobileType, promptEvent: this.promptEvent },
    });
    // timer(3000)
    //   .pipe(take(1))
    //   .subscribe(() => {

    //   });
  }
}
