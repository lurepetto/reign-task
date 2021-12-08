import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsInterface } from 'src/app/core/interfaces/news.interface';
import { FavoriteNewsService } from 'src/app/services/favorite-news.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  public activeFave: boolean;

  @Input() news: NewsInterface;
  @Output() updateFave: EventEmitter<any> = new EventEmitter<any>();

  public favCheckbox: FormControl = new FormControl(false);

  constructor(private favs: FavoriteNewsService) { }

  // ask for active liked status
  ngOnInit(): void {
    this.activeFave = this.favs.isFave(this.news.objectID);
  }

  // status logic method through objectID
  public changeFave(value: boolean): void {
    if (value) {
      this.favs.addToFaves(this.news.objectID);
    } else {
      this.favs.removeFave(this.news.objectID);
    }
  }

  // change status
  public toggleFave(): void {
    this.activeFave = !this.activeFave;
    this.changeFave(this.activeFave);
  }

}
