import { Component } from "@angular/core";
import * as L from "leaflet";
import { jsonData2 } from "../../../../_data/sipdps_cache";
import { LaporanProduktivitasService } from "./laporan-produktivitas.service";

@Component({
  selector: "app-laporan-produktivitas",
  templateUrl: "./laporan-produktivitas.component.html",
  styleUrls: ["./laporan-produktivitas.component.scss"]
})
export class LaporanProduktivitasComponent {
  jsonData = jsonData2;
  
  constructor(private service: LaporanProduktivitasService) {}

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
                <b>Kategori Lahan:</b> ${item.kategori_lahan}<br>
                <b>Jenis Lahan:</b> ${item.jenis_lahan}<br>
                <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
                <b>Teknik Pengukuran:</b> ${item.teknik_pengukuran}<br>
                <b>Jumlah:</b> ${item.jumlah}<br>
                <b>Status:</b> ${item.status}<br>
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
                <b>Kategori Lahan:</b> ${item.kategori_lahan}<br>
                <b>Jenis Lahan:</b> ${item.jenis_lahan}<br>
                <b>Jenis Tanaman Pangan:</b> ${item.jenis_tanaman_pangan}<br>
                <b>Teknik Pengukuran:</b> ${item.teknik_pengukuran}<br>
                <b>Jumlah:</b> ${item.jumlah}<br>
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
