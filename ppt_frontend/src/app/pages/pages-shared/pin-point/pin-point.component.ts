import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import * as L from "leaflet";
import { LocationService } from "../../../_services/location.service";
import * as opencage from "opencage-api-client";

@Component({
  selector: 'app-pin-point',
  templateUrl: './pin-point.component.html',
  styleUrls: ['./pin-point.component.scss']
})
export class PinPointComponent implements OnInit, OnChanges {
  @Input() containerId: string;
  @Input() selectedLat: string;
  @Input() selectedLng: string;
  @Output() locationUpdate = new EventEmitter<{ lat: number; lng: number }>();

  private map: any;
  private marker: any;
  private currentLat: number;
  private currentLng: number;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void { 
    this.initializeMap();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedLat || changes.selectedLng) {
      this.updateMarkerPosition();
    }
  }

  private updateMarkerPosition(): void {
    if (this.map && this.marker) {
      const latlng = L.latLng(Number(this.selectedLat), Number(this.selectedLng));
      this.marker.setLatLng(latlng);
      this.map.panTo(latlng);
    }
  }

  private initializeMap(): void {
    const iconDefault = L.icon({
      iconUrl: "assets/images/leaflet/drag-marker.png",
      iconRetinaUrl: "assets/images/leaflet/drag-marker.png",
      shadowUrl: "assets/images/leaflet/drag-marker.png"
    });

    this.locationService.getCurrentPosition().subscribe({
      next: position => {
        this.currentLat = position.coords.latitude;
        this.currentLng = position.coords.longitude;

        this.map = L.map(this.containerId).setView([this.currentLat, this.currentLng], 16);
        L.Marker.prototype.options.icon = iconDefault;
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        }).addTo(this.map);
        this.marker = L.marker([this.currentLat, this.currentLng], { draggable: true }).addTo(this.map);
        this.marker.on("drag", this.onMarkerDrag);
        this.map.on("dblclick", this.onMapDoubleClick);
      },
      error: err => {
        console.error("Error getting location:", err);
      }
    });
  }

  onMarkerDrag = (e: any) => {
    const latlng = e.target.getLatLng();
    this.locationUpdate.emit({ lat: latlng.lat, lng: latlng.lng });
    this.selectedLat = latlng.lat;
    this.selectedLng = latlng.lng;
  }

  onMapDoubleClick = (e: any) => {
    const latlng = e.latlng;
    this.marker.setLatLng(latlng);
    this.locationUpdate.emit({ lat: latlng.lat, lng: latlng.lng });
    this.selectedLat = latlng.lat;
    this.selectedLng = latlng.lng;
  };

  addressByOpenCage(lat: number, lng: number) {
    opencage
    .geocode({ q: `${lat}, ${lng}`, key: "60fefa41f986420db1704abc328c4a90" })
    .then((data) => {
      const location: string = data.results[0].annotations.roadinfo.road;
      const address: string = data.results[0].formatted;
      alert(`Latitude: ${lat}, Longitude: ${lng} Lokasi: ${location} Posisi : ${address}`);
    })
    .catch((error) => {
      console.log("Error caught:", error.message);
    });
  }

}
