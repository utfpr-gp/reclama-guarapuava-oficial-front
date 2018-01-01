import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/service/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'utfpr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.signIn(this.mountModel()).subscribe(res => {
      });
    }
  }

  private mountModel(): User {
    return new User();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
