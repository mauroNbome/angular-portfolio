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
  footerData = [
    {
      icon: 'whatsapp',
      color: '#38a145',
      text: ['+543413072211', '+543413072211'],
    },
    {
      icon: 'location_on',
      color: '#4e06fe',
      text: ['St. Brown 3155', 'Argentina, Rosario', '2000'],
    },
    { icon: 'email', color: '#f84e4f', text: ['mauro3196@gmail.com'] },
  ];

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
