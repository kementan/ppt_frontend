import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from '../auth.service';

const Swal = require("sweetalert2")
const msg = Swal.mixin({
  timer: 2000,
  timerProgressBar: true,
})

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  public verificationCode: string;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.verificationCode = params.get("verificationCode");
        this.auth.verifyEmail(this.verificationCode).subscribe({
          next: res => {
            if (res.data == true) {
              msg.fire(
                "Sudah Verifikasi", 
                "Email anda sudah diverifikasi, selamat menikmati layanan Portal Pertanian Terintegrasi", 
                "info",
              );
            } else {
              msg.fire(
                "Berhasil", 
                "Email anda berhasil diverifikasi, selanjutnya anda dapat melengkapi data untuk mengakses layanan Portal Pertanian Terintegrasi", 
                "success",
              );
            } 
            setTimeout(()=> {
              window.close();
            },2000)
          },
          error: err => {
            msg.fire(
              "Gagal Verifikasi", 
              "URL validasi tidak valid, silahkan hubungi administrator", 
              "warning",
            );
            setTimeout(()=> {
              window.close();
            },2000)
          }
        })
    });
  }
}
