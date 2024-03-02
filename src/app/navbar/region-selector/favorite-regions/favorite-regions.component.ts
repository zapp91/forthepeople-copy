import { Component, OnInit } from '@angular/core';
import { Region } from '../../../shared/region.model';
import { FavoriteRegionsService } from '../../../shared/favorite-regions.service';

@Component({
  selector: 'app-favorite-regions',
  templateUrl: './favorite-regions.component.html',
  styleUrls: ['./favorite-regions.component.scss']
})
export class FavoriteRegionsComponent implements OnInit {
  
  favRegions: Region[];

  constructor(private favRegionsService: FavoriteRegionsService) { }

  ngOnInit() {
    this.favRegions = this.favRegionsService.favRegions;
  }

  removeRegion(index) {
    this.favRegions.splice(index, 1);
  }

}