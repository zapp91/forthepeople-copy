import { Injectable, EventEmitter } from '@angular/core';
import { Region } from './region.model';

@Injectable()
export class FavoriteRegionsService {

  regionsChanged = new EventEmitter<Region[]>();
  favRegions: Region[] = [{
    name: 'Panama City',
    type: 'city',
    stateAcronym: 'FL'
  },{
    name: 'Everett',
    type: 'city',
    stateAcronym: 'WA'
  },{
    name: 'Bay',
    type: 'county',
    stateAcronym: 'FL'
  },{
    name: 'Snohomish',
    type: 'county',
    stateAcronym: 'WA'
  },{
    name: 'Washington',
    type: 'state',
    stateAcronym: 'WA'
  },{
    name: 'Florida',
    type: 'state',
    stateAcronym: 'FL'
  },{
    name: 'Kwigiumpainukamiut',
    type: 'city',
    stateAcronym: 'AK'
  }];

  getFavRegions() {
    return this.favRegions.slice();
  }

  removeRegion(index) {
    this.favRegions.splice(index, 1);
  }

}