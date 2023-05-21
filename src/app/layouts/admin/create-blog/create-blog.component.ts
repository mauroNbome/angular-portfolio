import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { Blog } from 'src/app/models/blog.models';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private HttpService: HttpService
  ) {}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.blogForm.valid) {
      const newBlog: Blog = this.blogForm.value;
      const createdBlog = await this.HttpService.createBlog(
        newBlog
      ).toPromise();

      if (createdBlog) {
        // TODO: handle successful blog creation (e.g. navigate to blog list, show success message)
      } else {
        // TODO: handle error in blog creation
      }
    }
  }
}
