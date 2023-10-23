import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-laporan-tanam",
  templateUrl: "./laporan-tanam.component.html",
  styleUrls: ["./laporan-tanam.component.scss"]
})
export class LaporanTanamComponent implements OnInit {
  jsonData = [
    {
      "nip_reporter": "196909062021212003",
      "nm_reporter": "Tika Rustika Pelita S, SP",
      "tgl_lapor": "2023-10-12 21:21:36",
      "tgl_kunjungan": "2023-10-11 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIANJUR",
      "nm_kec": "CIANJUR",
      "nm_desa": "SUKAMAJU",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "0.40",
      "hst": 90,
      "lat": "-6.83763806",
      "lng": "107.14221500",
      "photos": "[\"\\/uploads\\/posts\\/231012-670-576672237.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "196909062021212003",
      "nm_reporter": "Tika Rustika Pelita S, SP",
      "tgl_lapor": "2023-10-12 21:20:15",
      "tgl_kunjungan": "2023-10-11 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIANJUR",
      "nm_kec": "CIANJUR",
      "nm_desa": "SUKAMAJU",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "35.00",
      "hst": 90,
      "lat": "-6.83756806",
      "lng": "107.14187667",
      "photos": "[\"\\/uploads\\/posts\\/231012-670-868768241.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:40:51",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "MEKARJAYA",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "10.00",
      "hst": 7,
      "lat": "-7.29967150",
      "lng": "108.04045690",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-805108983.jpg\"]",
      "status": "Ditolak"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:36:28",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "MEKARJAYA",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "22.00",
      "hst": 7,
      "lat": "-7.30635139",
      "lng": "108.13171556",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-811022603.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:34:47",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "PADAKEMBANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "35.00",
      "hst": 7,
      "lat": "-7.30360806",
      "lng": "108.11057083",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-130184819.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:32:51",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "CISARUNI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "34.00",
      "hst": 7,
      "lat": "-7.31169250",
      "lng": "108.12320917",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-270564295.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:30:34",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "CISARUNI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "10.00",
      "hst": 15,
      "lat": "-7.31114444",
      "lng": "108.11484833",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-114687900.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:27:15",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "CISARUNI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "10.00",
      "hst": 15,
      "lat": "-7.31206139",
      "lng": "108.12312806",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-337304858.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:20:51",
      "tgl_kunjungan": "2023-09-30 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "RANCAPAKU",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "73.00",
      "hst": 50,
      "lat": "-7.32429056",
      "lng": "108.14560056",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-305688703.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "19731231 201411 2 003",
      "nm_reporter": "Rustika Suliyanti",
      "tgl_lapor": "2023-10-12 20:17:52",
      "tgl_kunjungan": "2023-08-26 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "TASIKMALAYA",
      "nm_kec": "PADAKEMBANG",
      "nm_desa": "CILAMPUNGHILIR",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "23.00",
      "hst": 15,
      "lat": "-7.32716556",
      "lng": "108.12792611",
      "photos": "[\"\\/uploads\\/posts\\/231012-1224-605007629.jpg\"]",
      "status": "Telah Diverifikasi"
  },
  {
      "nip_reporter": "PPPK",
      "nm_reporter": "Ali Wahidin",
      "tgl_lapor": "2023-10-12 16:35:59",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "GARUT",
      "nm_kec": "PEUNDEUY",
      "nm_desa": "SARIBAKTI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Ciherang",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "3.10",
      "hst": 15,
      "lat": "-7.54431819",
      "lng": "107.92532347",
      "photos": "[\"\\/uploads\\/posts\\/231012-2193-409484926.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 15:38:36",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SADAWARNA",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "19.00",
      "hst": 30,
      "lat": "-6.55579220",
      "lng": "107.82055500",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-271076857.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 15:24:56",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "19.00",
      "hst": 30,
      "lat": "-6.55579180",
      "lng": "107.82055490",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-567497187.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 15:05:49",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SADAWARNA",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "1.00",
      "hst": 45,
      "lat": "-6.55579220",
      "lng": "107.82055500",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-675192000.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 14:53:26",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "19.00",
      "hst": 26,
      "lat": "-6.55579220",
      "lng": "107.82055500",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-459227795.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 14:39:25",
      "tgl_kunjungan": "2023-06-26 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "19.00",
      "hst": 22,
      "lat": "-6.55864797",
      "lng": "107.87869100",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-954131129.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 13:47:23",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "1.00",
      "hst": 1,
      "lat": "-6.55579170",
      "lng": "107.82055480",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-945769398.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 13:40:57",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "1.00",
      "hst": 1,
      "lat": "-6.55579160",
      "lng": "107.82055440",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-210437564.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "THL",
      "nm_reporter": "Moh. Hadi Al Gifari",
      "tgl_lapor": "2023-10-12 13:39:07",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KUNINGAN",
      "nm_kec": "CIPICUNG",
      "nm_desa": "CIPICUNG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "3.00",
      "hst": 14,
      "lat": "-6.94647503",
      "lng": "108.54120633",
      "photos": "[\"\\/uploads\\/posts\\/231012-2847-300314432.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "THL",
      "nm_reporter": "Moh. Hadi Al Gifari",
      "tgl_lapor": "2023-10-12 13:37:52",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "KUNINGAN",
      "nm_kec": "CIPICUNG",
      "nm_desa": "CIPICUNG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "15.00",
      "hst": 35,
      "lat": "-6.93890760",
      "lng": "108.52617230",
      "photos": "[\"\\/uploads\\/posts\\/231012-2847-407471010.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "197503262014112001",
      "nm_reporter": "ANE TRIANA WULANSARI, S.TP.",
      "tgl_lapor": "2023-10-12 13:37:10",
      "tgl_kunjungan": "2023-10-12 00:00:00",
      "jenis_kelompok": "Kelompok Tani",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "SUBANG",
      "nm_kec": "CIBOGO",
      "nm_desa": "SUMURBARANG",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Tadah Hujan",
      "jenis_tanaman_pangan": "Kedelai",
      "nm_varietas": "Anjasmoro",
      "jenis_bantuan": "BanPem",
      "sumber_bantuan": "APBN Ditjen TP",
      "tahun_bantuan": "2023",
      "luas_area": "1.00",
      "hst": 1,
      "lat": "-6.55579020",
      "lng": "107.82055610",
      "photos": "[\"\\/uploads\\/posts\\/231012-3884-463990711.jpg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "19931204 202012 1 004",
      "nm_reporter": "Ahmad Aonillah, SP.",
      "tgl_lapor": "2023-10-12 13:23:23",
      "tgl_kunjungan": "2023-09-25 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIREBON",
      "nm_kec": "WERU",
      "nm_desa": "SETU WETAN",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "6.00",
      "hst": 3,
      "lat": "-6.68361111",
      "lng": "108.49750000",
      "photos": "[\"\\/uploads\\/posts\\/231012-13989-851413662.jpeg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "19931204 202012 1 004",
      "nm_reporter": "Ahmad Aonillah, SP.",
      "tgl_lapor": "2023-10-12 13:21:08",
      "tgl_kunjungan": "2023-09-29 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIREBON",
      "nm_kec": "WERU",
      "nm_desa": "KERTASARI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "1.00",
      "hst": 3,
      "lat": "-6.72822600",
      "lng": "108.48863000",
      "photos": "[\"\\/uploads\\/posts\\/231012-13989-405930140.jpeg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "19931204 202012 1 004",
      "nm_reporter": "Ahmad Aonillah, SP.",
      "tgl_lapor": "2023-10-12 12:46:25",
      "tgl_kunjungan": "2023-09-25 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIREBON",
      "nm_kec": "WERU",
      "nm_desa": "SETU KULON",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Lain-lain",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "2.00",
      "hst": 3,
      "lat": "-6.67802200",
      "lng": "108.50239200",
      "photos": "[\"\\/uploads\\/posts\\/231012-13989-876615237.jpeg\"]",
      "status": "Pending"
  },
  {
      "nip_reporter": "19950205 202012 1 002",
      "nm_reporter": "Indra Ramadhan",
      "tgl_lapor": "2023-10-12 12:06:32",
      "tgl_kunjungan": "2023-09-14 00:00:00",
      "jenis_kelompok": "Gapoktan",
      "nm_prov": "JAWA BARAT",
      "nm_kab": "CIREBON",
      "nm_kec": "PLUMBON",
      "nm_desa": "BODESARI",
      "kategori_lahan": "Lahan Sawah",
      "jenis_lahan": "Sawah Irigasi",
      "jenis_tanaman_pangan": "Padi",
      "nm_varietas": "Inpari 32 HDB",
      "jenis_bantuan": "Non BanPem",
      "sumber_bantuan": null,
      "tahun_bantuan": null,
      "luas_area": "5.00",
      "hst": 5,
      "lat": "-6.71382200",
      "lng": "108.48341800",
      "photos": "[\"\\/uploads\\/posts\\/231012-13988-572102635.jpg\"]",
      "status": "Pending"
  }
  ];

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
