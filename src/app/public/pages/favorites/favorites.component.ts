import { Component, OnInit } from '@angular/core';
import { NewsInterface } from 'src/app/core/interfaces/news.interface';
import { FavoriteNewsService } from 'src/app/services/favorite-news.service';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public faveList: string[];

  constructor(private favsService: FavoriteNewsService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): any {
    this.faveList = this.favsService.faveList();
  }

}
