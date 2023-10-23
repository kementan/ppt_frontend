// map.service.ts
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: L.Map | null = null;

  createMap(containerId: string, initialLat: number, initialLng: number) {
    if (!this.map) {
      this.map = L.map(containerId).setView([initialLat, initialLng], 16);
    }
  }

  getMapInstance(): L.Map | null {
    return this.map;
  }
}
