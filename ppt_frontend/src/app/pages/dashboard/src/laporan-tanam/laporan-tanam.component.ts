import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { jsonData4 } from "../../../../_data/sipdps_cache";

@Component({
  selector: "app-laporan-tanam",
  templateUrl: "./laporan-tanam.component.html",
  styleUrls: ["./laporan-tanam.component.scss"]
})
export class LaporanTanamComponent implements OnInit {
  jsonData = jsonData4;

  constructor() {}

  ngOnInit(): void {
    const iconDefault = L.icon({
      iconUrl: "assets/images/leaflet/marker-icon.png",
      iconRetinaUrl: "assets/images/leaflet/marker-icon.png",
      shadowUrl: "assets/images/leaflet/marker-shadow.png"
    });

    const map = L.map("map").setView([-6.917464, 107.619125], 9);
    L.Marker.prototype.options.icon = iconDefault;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

    this.jsonData.forEach((data) => {
      const popupContent = `
        <b>Jenis Kelompok:</b> ${data.jenis_kelompok}<br>
        <b>Nama Provinsi:</b> ${data.nm_prov}<br>
        <b>Nama Kabupaten:</b> ${data.nm_kab}<br>
        <b>Nama Kecamatan:</b> ${data.nm_kec}<br>
        <b>Nama Desa:</b> ${data.nm_desa}<br>
        <b>Kategori Lahan:</b> ${data.kategori_lahan}<br>
        <b>Jenis Lahan:</b> ${data.jenis_lahan}<br>
        <b>Jenis Tanaman Pangan:</b> ${data.jenis_tanaman_pangan}<br>
        <b>Nama Varietas:</b> ${data.nm_varietas}<br>
        <b>Jenis Bantuan:</b> ${data.jenis_bantuan}<br>
        <b>Sumber Bantuan:</b> ${data.sumber_bantuan}<br>
      `;

      L.marker([parseFloat(data.lat), parseFloat(data.lng)])
        .addTo(map)
        .bindPopup(popupContent)
        .openPopup();
    });
  }
}
