import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
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
  fetchingData: boolean = false;
  formController: any;
  footerData = [
    {
      icon: 'call',
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

  constructor(private fb: FormBuilder, private service: HttpService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formController = new FormGroup({
      name: new FormControl('', {
        validators: Validators.required,
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      }),
      phone: new FormControl('', {
        validators: Validators.required,
      }),
      message: new FormControl('', {
        validators: Validators.required,
      }),
    });
  }

  printer(event) {
    console.log(event);
  }

  resetForm(): void {
    this.formController.reset();
  }

  submit(): void {
    if (!this.formController.valid) {
      console.log('not valid');
      return;
    }

    this.service.sendMessage().subscribe((resp) => {
      this.fetchingData = true;
      setTimeout(() => {
        this.fetchingData = false;
        console.log(resp);
        // display animation with message here.
        this.resetForm();
      }, 1500);
    });
  }
}
