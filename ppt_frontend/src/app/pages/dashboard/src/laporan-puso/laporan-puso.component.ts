import { Component } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-laporan-puso",
  templateUrl: "./laporan-puso.component.html",
  styleUrls: ["./laporan-puso.component.scss"]
})
export class LaporanPusoComponent {
  jsonData = [
    {
      "nip_reporter": "197304082007011015",
      "nm_reporter": "MISNA BUDIYAWANTO, STP, MM.Pd",
      "tgl_lapor": "2023-08-22 07:22:18",
      "tgl_kejadian": "2023-08-20",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "INDRAMAYU",
      "nm_kec": "GANTAR",
      "nm_desa": "MEKARJAYA",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Kekeringan",
      "lat": "-6.54573778",
      "lng": "107.99526000",
      "photos": "[\"\\/uploads\\/posts\\/230822-969-502725553.jpg\"]",
      "nm_verifikator": null,
      "status": "Pending"
  },
  {
      "nip_reporter": "19810219 201001 1 009",
      "nm_reporter": "Fery Ferdiansyah",
      "tgl_lapor": "2023-08-09 12:14:03",
      "tgl_kejadian": "2023-02-27",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KARAWANG",
      "nm_kec": "CILEBAR",
      "nm_desa": "TANJUNGSARI",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Banjir",
      "lat": "-6.16508697",
      "lng": "107.42567800",
      "photos": "[\"\\/uploads\\/posts\\/230809-6413-553812740.jpg\"]",
      "nm_verifikator": "Darul Mardiana",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19810219 201001 1 009",
      "nm_reporter": "Fery Ferdiansyah",
      "tgl_lapor": "2023-07-03 12:43:13",
      "tgl_kejadian": "2023-02-25",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KARAWANG",
      "nm_kec": "CILEBAR",
      "nm_desa": "MEKARPOHACI",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Banjir",
      "lat": "-6.17272722",
      "lng": "107.42024111",
      "photos": "[\"\\/uploads\\/posts\\/230703-6413-646677531.jpg\"]",
      "nm_verifikator": "Darul Mardiana",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "198003232006042022",
      "nm_reporter": "Sulistyowati, S. TP",
      "tgl_lapor": "2023-04-12 09:19:18",
      "tgl_kejadian": "2023-04-03",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KOTA CIREBON",
      "nm_kec": "KESAMBI",
      "nm_desa": "KARYAMULYA",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "OPT Lainnya",
      "lat": "-6.74051306",
      "lng": "108.52389972",
      "photos": "[\"\\/uploads\\/posts\\/230412-4629-600255620.jpg\"]",
      "nm_verifikator": "Dini Nuraeni",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "198301132010012010",
      "nm_reporter": "Yayu Yulianti, SP",
      "tgl_lapor": "2023-03-28 10:35:34",
      "tgl_kejadian": "2023-03-28",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KARAWANG",
      "nm_kec": "TELUKJAMBE BARAT",
      "nm_desa": "KARANGLIGAR",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Banjir",
      "lat": "-6.31310500",
      "lng": "107.25051997",
      "photos": "[\"\\/uploads\\/posts\\/230328-6383-614491749.jpg\"]",
      "nm_verifikator": "Imet Hidayat",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "198301132010012010",
      "nm_reporter": "Yayu Yulianti, SP",
      "tgl_lapor": "2023-03-28 10:33:59",
      "tgl_kejadian": "2023-03-28",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KARAWANG",
      "nm_kec": "TELUKJAMBE BARAT",
      "nm_desa": "KARANGLIGAR",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Banjir",
      "lat": "-6.31301197",
      "lng": "107.25064797",
      "photos": "[\"\\/uploads\\/posts\\/230328-6383-618758323.jpg\"]",
      "nm_verifikator": "Imet Hidayat",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "198011112008012010",
      "nm_reporter": "Nourma Syahidawati, SP.,MP",
      "tgl_lapor": "2023-01-27 08:47:43",
      "tgl_kejadian": "2023-01-26",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUKABUMI",
      "nm_kec": "PABUARAN",
      "nm_desa": "LEMBURSAWAH",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "OPT",
      "lat": "-7.15695475",
      "lng": "106.87665556",
      "photos": "[\"\\/uploads\\/posts\\/230127-13271-274798557.jpg\"]",
      "nm_verifikator": null,
      "status": "Pending"
  },
  {
      "nip_reporter": "THL",
      "nm_reporter": "Moh. Hadi Al Gifari",
      "tgl_lapor": "2022-10-31 15:02:22",
      "tgl_kejadian": "2022-10-12",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KUNINGAN",
      "nm_kec": "CIPICUNG",
      "nm_desa": "SUGANANGAN",
      "jenis_tanaman_pangan": "Kacang Hijau",
      "penyebab_puso": "Kekeringan",
      "lat": "-6.92151781",
      "lng": "108.56536864",
      "photos": "[\"\\/uploads\\/posts\\/221031-2847-367921483.jpg\"]",
      "nm_verifikator": null,
      "status": "Pending"
  },
  {
      "nip_reporter": "198910092022211002",
      "nm_reporter": "Edi Supriatna, S.Pt.",
      "tgl_lapor": "2022-09-13 07:39:54",
      "tgl_kejadian": "2022-09-13",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "MAJALENGKA",
      "nm_kec": "KERTAJATI",
      "nm_desa": "BABAKAN",
      "jenis_tanaman_pangan": "Kedelai",
      "penyebab_puso": "Bencana Lainnya",
      "lat": "-6.69488003",
      "lng": "108.17919158",
      "photos": "[\"\\/uploads\\/posts\\/220913-66895.jpg\"]",
      "nm_verifikator": "Jajat",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "197012261998031005",
      "nm_reporter": "Dedi Sutardi, S.ST",
      "tgl_lapor": "2022-07-24 22:55:22",
      "tgl_kejadian": "2022-07-01",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIAMIS",
      "nm_kec": "BANJARANYAR",
      "nm_desa": "LANGKAPSARI",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "OPT",
      "lat": "-7.55547903",
      "lng": "108.56950378",
      "photos": "[\"\\/uploads\\/posts\\/220724-51314.jpg\"]",
      "nm_verifikator": null,
      "status": "Pending"
  },
  {
      "nip_reporter": "199611012022211002",
      "nm_reporter": "HILMAN MAULANA, SP.",
      "tgl_lapor": "2021-09-15 12:13:11",
      "tgl_kejadian": "2021-07-13",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "MAJALENGKA",
      "nm_kec": "BANTARUJEG",
      "nm_desa": "HAURGEULIS",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Kekeringan",
      "lat": "-6.95097800",
      "lng": "108.27754097",
      "photos": "[\"\\/uploads\\/posts\\/210915-21557.jpg\"]",
      "nm_verifikator": "Jajat",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "THL",
      "nm_reporter": "DELA SYARA YUNISA",
      "tgl_lapor": "2021-06-04 16:25:29",
      "tgl_kejadian": "2021-06-04",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "GARUT",
      "nm_kec": "CIBALONG",
      "nm_desa": "MEKARSARI",
      "jenis_tanaman_pangan": "Padi",
      "penyebab_puso": "Kekeringan",
      "lat": "-7.65950203",
      "lng": "107.75399017",
      "photos": "[\"\\/uploads\\/posts\\/210604-59433.jpg\"]",
      "nm_verifikator": "Poppy Kusumawati",
      "status": "Telah Diverifikasi"
  }
  ];
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
