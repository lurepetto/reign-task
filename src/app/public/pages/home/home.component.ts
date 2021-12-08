import { Component, OnInit } from '@angular/core';
import { NewsInterface } from 'src/app/core/interfaces/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { FavoriteNewsService } from '../../../services/favorite-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // dropdown values
  public typesLanguage = ['angular', 'react', 'vue'];

  // Create the variable for the incoming DOM value
  public selectedValue = 'angular';
  public news: NewsInterface[] = [];

  public newsItemId;

  constructor(
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews(this.selectedValue);
  }

  // Receive the value as parameter, assign it and then subscribe the incoming data
  loadNews(value: string): void {
    this.newsService.getNewsByLanguage(value).subscribe((response: any) => {
      this.news = response.hits;
    });
  }

}
