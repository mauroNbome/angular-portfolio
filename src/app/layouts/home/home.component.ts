import { Component, OnInit } from '@angular/core';
import { SocialMediaLink } from 'src/app/models/home.models';
import { HttpService } from 'src/app/services/http/http.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  findWithMe: SocialMediaLink[] = [];

  bestSkills: SocialMediaLink[] = [];
  constructor(public ui: UiService, private service: HttpService) {}

  ngOnInit(): void {
    this.getHomeData();
  }

  async getHomeData(): Promise<void> {
    const resp = await this.service.getHomeData().toPromise();
    this.findWithMe = resp.findWithme;
    this.bestSkills = resp.bestSkills;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
