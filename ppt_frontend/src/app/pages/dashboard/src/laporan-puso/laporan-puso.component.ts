import { Component } from "@angular/core";
import * as L from "leaflet";
import { jsonData3 } from "../../../../_data/sipdps_cache";

@Component({
  selector: "app-laporan-puso",
  templateUrl: "./laporan-puso.component.html",
  styleUrls: ["./laporan-puso.component.scss"]
})
export class LaporanPusoComponent {
  jsonData = jsonData3;
  
  constructor() {}

  ngOnInit(): void {
    const iconDefault = L.icon({
      iconUrl: "assets/images/leaflet/marker-icon.png",
      iconRetinaUrl: "assets/images/leaflet/marker-icon.png",
      shadowUrl: "assets/images/leaflet/marker-shadow.png"
    });

    const map = L.map("map").setView([-7.186391619934192, 108.3667705731445], 9);
    L.Marker.prototype.options.icon = iconDefault;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

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
        .bindPopup(popupContent)
        .openPopup();
    });
  }
}
