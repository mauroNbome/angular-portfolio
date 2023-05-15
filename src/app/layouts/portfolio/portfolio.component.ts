import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/portfolio.models';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects() {
    const resp = await this.service.getMockProjects().toPromise();
    this.projects = resp;
  }

  addToFav(item: Project) {
    const project: Project = this.projects.find((el) => el.id === item.id);

    if (project) {
      if (!project.alreadyLiked) {
        project.likes++;
        project.alreadyLiked = true;
      } else {
        project.likes--;
        project.alreadyLiked = false;
      }
    }
  }

  alreadyLiked(status: boolean) {
    return status ? 'favorite' : 'favorite_border';
  }
}
