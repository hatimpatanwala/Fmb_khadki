import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent {
  itsId: string;
  verifyOtpForm: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!params['its']) {
        this.router.navigate(['login']);
        return;
      }
      this.itsId = params['its'];
    });
  }
  ngOnInit(): void {
    this.verifyOtpForm = this.formBuilder.group({
      itsId: [{ value: this.itsId, disabled: true }, [Validators.required]],
      otp: [null, Validators.required],
    });
  }
  async onVerify(): Promise<void> {
    try {
      const payload = {
        its: this.verifyOtpForm.controls.itsId.value.toString(),
        otp: this.verifyOtpForm.controls.otp.value.toString(),
      };

      const result = await this.authService.verifyOtp(payload);
      if (result) {
        this.authService.setUserData(result, true);
        this.router.navigate(['/dashboard']);
      }
    } catch (err) {
      this.verifyOtpForm.controls.otp.setValue(null);
      this._snackBar.open(err, 'error', { duration: 2000 });
    }
  }
}
