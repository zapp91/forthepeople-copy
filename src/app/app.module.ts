import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionSelectorComponent } from './navbar/region-selector/region-selector.component';
import { FavoriteRegionsComponent } from './navbar/region-selector/favorite-regions/favorite-regions.component';
import { SearchRegionsComponent } from './navbar/region-selector/search-regions/search-regions.component';
import { FavoriteRegionsService } from './shared/favorite-regions.service';
import { AngularResizedEventModule } from 'angular-resize-event';
import { FeaturesComponent } from './features/features.component';
import { ForumsComponent } from './features/forums/forums.component';
import { ForumsService } from './features/forums/forums.service';
import { ForumComponent } from './features/forums/forum/forum.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularResizedEventModule ],
  declarations: [ AppComponent, NavbarComponent, RegionSelectorComponent, FavoriteRegionsComponent, SearchRegionsComponent, FeaturesComponent, ForumsComponent, ForumComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FavoriteRegionsService, ForumsService]
})
export class AppModule { }
