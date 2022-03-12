import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  formController: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formController = new FormGroup({
      name: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      phone: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      message: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
    });
  }

  submit() {
    console.log(this.formController);
  }
}
