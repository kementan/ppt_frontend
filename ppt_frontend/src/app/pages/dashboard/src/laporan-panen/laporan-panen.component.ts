import { Component } from "@angular/core";
import * as L from "leaflet";
import { jsonData1 } from "../../../../_data/sipdps_cache";
import { LaporanPanenService } from "./laporan-panen.service";

@Component({
  selector: "app-laporan-panen",
  templateUrl: "./laporan-panen.component.html",
  styleUrls: ["./laporan-panen.component.scss"]
})
export class LaporanPanenComponent {
  jsonData = jsonData1;

  constructor(private service: LaporanPanenService) {}

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
              <b>Tanggal Kunjungan:</b> ${item.tgl_kunjungan}<br>
              <b>Provinsi:</b> ${item.nm_prov}<br>
              <b>Kabupaten:</b> ${item.nm_kab}<br>
              <b>Kecamatan:</b> ${item.nm_kec}<br>
              <b>Desa:</b> ${item.nm_desa}<br>
              <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
              <b>Varietas:</b> ${item.nm_varietas}<br>
              <b>Kategori Pengelola:</b> ${item.kategori_pengelola}<br>
              <b>Nama Pengelola:</b> ${item.nama_pengelola}<br>
              <b>Luas:</b> ${item.luas}<br>
              <b>Perkiraan:</b> ${item.perkiraan}<br>
              <b>Status:</b> ${item.status}
              `;
              const latitude = parseFloat(item.lat);
              const longitude = parseFloat(item.lng);
        
              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup(popupContent);
            });
          } else {
            this.jsonData.forEach(item => {
              const popupContent = `
              <b>Tanggal Lapor:</b> ${item.tgl_lapor}<br>
              <b>Tanggal Kunjungan:</b> ${item.tgl_kunjungan}<br>
              <b>Provinsi:</b> ${item.nm_prov}<br>
              <b>Kabupaten:</b> ${item.nm_kab}<br>
              <b>Kecamatan:</b> ${item.nm_kec}<br>
              <b>Desa:</b> ${item.nm_desa}<br>
              <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
              <b>Varietas:</b> ${item.nm_varietas}<br>
              <b>Kategori Pengelola:</b> ${item.kategori_pengelola}<br>
              <b>Nama Pengelola:</b> ${item.nama_pengelola}<br>
              <b>Luas:</b> ${item.luas}<br>
              <b>Perkiraan:</b> ${item.perkiraan}<br>
              <b>Status:</b> ${item.status}
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
