import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AsyncValidator,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['menu']);
      }
    });
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      itsId: [null, [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    });
  }
  async onSubmit(): Promise<void> {
    try {
      const payload = { its: this.loginForm.controls.itsId.value.toString() };
      console.log(payload);
      const result = await this.authService.login(payload);
      if (result) {
        this.router.navigate(['verify-otp'], {
          queryParams: { its: payload.its },
        });
      }
    } catch (err) {
      this.loginForm.controls.itsId.setValue(null);
      this._snackBar.open(err, 'error', { duration: 2000 });
    }
  }
}
