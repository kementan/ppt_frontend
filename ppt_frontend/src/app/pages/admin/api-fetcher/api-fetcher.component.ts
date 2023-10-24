import { Component } from "@angular/core";
import { ApiFetcherService } from "./api-fetcher.service";
import { ToastrService } from 'ngx-toastr';

const Swal = require("sweetalert2")
const msg = Swal.mixin({
  timer: 3000,
  timerProgressBar: true, 
})

@Component({
  selector: "app-api-fetcher",
  templateUrl: "./api-fetcher.component.html",
  styleUrls: ["./api-fetcher.component.scss"]
})
export class ApiFetcherComponent {
  public sec1_title: string = "Fetch API Data";

  constructor(private service: ApiFetcherService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  syncData(): void {
    msg.fire({
      title: "Sinkronisasi Data Baru ?",
      text: "Data dari API akan ditarik, disimpan pada database, dan ditampilkan pada layanan terkait",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.GetSIPDPSTanam().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API SIPDPS Tanam berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API SIPDPS Tanam Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetSIPDPSProduktivitas().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API SIPDPS Produktivitas berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API SIPDPS Produktivitas Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetSIPDPSPuso().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API SIPDPS Puso berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API SIPDPS Puso Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetSIPDPSPanen().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API SIPDPS Panen berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API SIPDPS Panen Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanProdusen().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Seluruh Produsen berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Seluruh Produsen Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekNas().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap Nasional berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap Nasional Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekLssm().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap LSSM berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap LSSM Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekBpsb().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap BPSB berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap BPSB Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekPenyaluran().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap Penyaluran berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap Penyaluran Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekPenyebaran().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap Penyebaran berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap Penyebaran Bermasalah, hubungi provider', 'Gagal');
          }
        });

        this.service.GetPerbenihanRekProdusen().subscribe({
          next: res => {
            console.log(res);
            this.toastr.success('API Perbenihan Rekap Produsen berhasil diperbarui', 'Berhasil');
          },
          error: err => {
            console.log(err);
            this.toastr.warning('API Perbenihan Rekap Produsen Bermasalah, hubungi provider', 'Gagal');
          }
        });
      }
    });
  }
}
