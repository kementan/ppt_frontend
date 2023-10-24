import { Component } from "@angular/core";
import * as L from "leaflet";
import { jsonData3 } from "../../../../_data/sipdps_cache";
import { LaporanPusoService } from "./laporan-puso.service";

@Component({
  selector: "app-laporan-puso",
  templateUrl: "./laporan-puso.component.html",
  styleUrls: ["./laporan-puso.component.scss"]
})
export class LaporanPusoComponent {
  jsonData = jsonData3;
  
  constructor(private service: LaporanPusoService) {}

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

    this.service.GetData().subscribe({
      next: res => {
          if (res.data.length > 0) {
            res.data.forEach(item => {
              const popupContent = `
              <b>Tanggal Lapor:</b> ${item.tgl_lapor}<br>
              <b>Tanggal Kejadian:</b> ${item.tgl_kejadian}<br>
              <b>Provinsi:</b> ${item.nm_prov}<br>
              <b>Kabupaten:</b> ${item.nm_kab}<br>
              <b>Kecamatan:</b> ${item.nm_kec}<br>
              <b>Desa:</b> ${item.nm_desa}<br>
              <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
              <b>Penyebab Puso:</b> ${item.penyebab_puso}<br>
              <b>Status:</b> ${item.status}<br>
              `;
              const latitude = parseFloat(item.lat);
              const longitude = parseFloat(item.lng);
        
              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup(popupContent)
                .openPopup();
            });
          } else {
            this.jsonData.forEach(item => {
              const popupContent = `
              <b>Tanggal Lapor:</b> ${item.tgl_lapor}<br>
              <b>Tanggal Kejadian:</b> ${item.tgl_kejadian}<br>
              <b>Provinsi:</b> ${item.nm_prov}<br>
              <b>Kabupaten:</b> ${item.nm_kab}<br>
              <b>Kecamatan:</b> ${item.nm_kec}<br>
              <b>Desa:</b> ${item.nm_desa}<br>
              <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
              <b>Penyebab Puso:</b> ${item.penyebab_puso}<br>
              <b>Status:</b> ${item.status}<br>
              `;
              const latitude = parseFloat(item.lat);
              const longitude = parseFloat(item.lng);
        
              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup(popupContent);
            });
          }
          
      },
      error: err => {
          console.log(err);
      }
    });
  }
}
