import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: {
      mobileType: 'android' | 'ios';
      promptEvent: any;
    },
    private bottomSheetRef: MatBottomSheetRef<PromptComponent>
  ) {}
  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.data.promptEvent.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        // alert('User accepted the prompt');
      } else {
        // alert('User dismissed the prompt');
      }
      this.data.promptEvent = null;
    });
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
}
