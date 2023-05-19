import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Blog } from 'src/app/models/blog.models';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  displayedBlogs: Blog[];
  currentSelectedBlog: Blog;

  constructor(private httpService: HttpService, public ui: UiService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  formatDesc(text: string, count: number): string {
    return text.slice(0, count);
  }

  async getBlogs(): Promise<void> {
    const resp = await this.httpService.getBlogs().toPromise();
    this.blogs = resp;
    this.sortBlogsByDate();
    this.initializeDisplayedBlogs();
    this.setCurrentSelectedBlog(this.blogs[0]);
  }

  sortBlogsByDate(): void {
    this.blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  initializeDisplayedBlogs(): void {
    this.displayedBlogs = this.blogs.filter((el) => el.id !== this.blogs[0].id);
  }

  setCurrentSelectedBlog(item: Blog): void {
    this.currentSelectedBlog = item;
  }

  setBlogToHead(item: Blog): void {
    this.setCurrentSelectedBlog(item);
    this.updateDisplayedBlogs(item);
    this.sortDisplayedBlogsByDate();
    this.scrollToTop();
  }

  updateDisplayedBlogs(item: Blog): void {
    this.displayedBlogs = this.blogs.filter((el) => el.id !== item.id);
  }

  sortDisplayedBlogsByDate(): void {
    this.displayedBlogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
