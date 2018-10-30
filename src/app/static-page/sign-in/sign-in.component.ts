import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/service/auth.service';
import {User} from '../../model/user';
import {DataService} from '../../auth/service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'utfpr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.signIn(this.mountModel()).subscribe(res => {
        const user = res[0];
        if (user.role.name === 'ADMIN') {
          this.dataService.setROLE('ADMIN');
          this.dataService.setTOKEN('asdad');
          this.router.navigate(['/admin']);
        }
        if (user.role.name === 'MANAGER') {
          this.dataService.setROLE('MANAGER');
          this.dataService.setTOKEN('asdad');
          this.router.navigate(['/manager']);
        }
        if (user.role.name === 'USER') {
          this.dataService.setROLE('USER');
          this.dataService.setTOKEN('asdad');
          this.router.navigate(['/user']);
        }
      });
    }
  }

  private mountModel(): User {
    const user = new User();
    user.email = this.form.value.login;
    user.password = this.form.value.password;
    return user;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
