import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fetchingData: boolean = false;
  formController: any;

  constructor(private fb: FormBuilder, private service: HttpService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formController = new FormGroup({
      username: new FormControl('', {
        validators: Validators.required,
      }),
      password: new FormControl('', {
        validators: Validators.required,
      }),
    });
  }

  submit(): void {
    if (!this.formController.valid) {
      console.log('not valid');
      return;
    }

    this.service.login(this.formController.value).subscribe((resp) => {
      this.fetchingData = true;
      setTimeout(() => {
        this.fetchingData = false;
        console.log(resp);
        // redirige al usuario o muestra un mensaje de éxito aquí.
      }, 1500);
    });
  }
}
