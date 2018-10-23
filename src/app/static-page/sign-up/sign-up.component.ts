import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthService} from '../../auth/service/auth.service';
import {GenderService} from '../../core/data-service/gender.service';
import {CustomValidators} from 'ng2-validation';
import {CityService} from '../../core/data-service/city.service';
import {NeighborhoodService} from '../../core/data-service/neighborhood.service';

@Component({
  selector: 'utfpr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  genders$;
  neighborhoods$;
  cities$;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private genderService: GenderService,
              private cityService: CityService,
              private neighborhoodService: NeighborhoodService) {
  }

  ngOnInit() {
    this.genders$ = this.cityService.all();
    this.cities$ = this.genderService.all();
    this.neighborhoods$ = this.neighborhoodService.all();
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.signIn(this.mountModel()).subscribe(res => {

      }, error => {

      });
    }
  }


  private resetForm(): void {
    this.form.reset();
  }

  private mountModel(): User {
    const model = new User();
    model.name = this.form.value.name;
    model.gender = this.form.value.gender;
    model.dateOfBirth = this.form.value.dateOfBirth;
    model.password = this.form.value.password;
    model.email = this.form.value.email;
    return new User();
  }

  private buildForm(): void {
    const pwd = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', [CustomValidators.equalTo(pwd), Validators.required]);

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      password: pwd,
      confirmPassword: certainPassword,
    });
  }
}
