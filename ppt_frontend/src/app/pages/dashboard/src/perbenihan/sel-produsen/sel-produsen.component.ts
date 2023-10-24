import { Component } from '@angular/core';
import * as L from "leaflet";
import { SelProdusenService } from "./sel-produsen.service"

@Component({
  selector: 'app-sel-produsen',
  templateUrl: './sel-produsen.component.html',
  styleUrls: ['./sel-produsen.component.scss']
})
export class SelProdusenComponent {
  constructor(private service: SelProdusenService) { }

  ngOnInit(): void {
    const iconDefault = L.icon({
      iconUrl: "assets/images/leaflet/marker-icon.png",
      iconRetinaUrl: "assets/images/leaflet/marker-icon.png",
      shadowUrl: "assets/images/leaflet/marker-shadow.png"
    });

    const map = L.map("map").setView([0.7893, 113.9213], 5);
    L.Marker.prototype.options.icon = iconDefault;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);


    this.service.GetPerbenihanProdusen().subscribe({
        next: res => {
            console.log(res);
            res.data.forEach(function(data) {
              const lat = parseFloat(data.LAT);
              const lng = parseFloat(data.LNG);

              if (!isNaN(lat) && !isNaN(lng) && isFinite(lat) && isFinite(lng)) {
                  var popupContent = `
                      <b>Provinsi:</b> ${data.PROVINSI}<br>
                      <b>Nama:</b> ${data.NAMA}<br>
                      <b>Alamat:</b> ${data.ALAMAT_PRODUSEN}<br>
                      <b>Telepon:</b> ${data.TELEPON}<br>
                      <b>DICATAT:</b> ${data.DICATAT}<br>
                      <b>DIPERBARUI:</b> ${data.DIPERBARUI}<br>
                  `;
  
                  L.marker([lat, lng]).addTo(map)
                      .bindPopup(popupContent);
              }
            });
        },
        error: err => {
            console.log(err);
        }
    });

  }
}
