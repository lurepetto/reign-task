import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HackerHeaderComponent } from './components/hacker-header/hacker-header.component';
import { PublicRoutingModule } from './public-routing.module';
import { HackerNewsComponent } from './components/post-card/hacker-news.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { DateAgoPipe } from '../core/pipes/date-ago.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    HackerHeaderComponent,
    HackerNewsComponent,
    TabsComponent,
    NewsListComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  providers: [DateAgoPipe]
})
export class PublicModule { }
