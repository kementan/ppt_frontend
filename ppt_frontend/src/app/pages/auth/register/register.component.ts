import { Component, OnInit, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { AuthService } from "../auth.service";
import { StorageService } from "../../../_services/storage.service";
import { Router } from "@angular/router";
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


const Swal = require("sweetalert2")
const msg = Swal.mixin({
  timer: 3000,
  timerProgressBar: true,
})

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Syarat dan Ketentuan</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        
      </button>
    </div>
    <div class="modal-body">
      <p>Konten ada disini</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Lanjut</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    username: null,
    email: null,
    password: null,
    confirm_password: null,
  }
  isEqual = true;
  isLoggedIn = false;
  isRegisterFailed = false;
  errorMessage = "";
  acceptedTerms = false;
  

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    public router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void { 
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(["/dashboard"]);
    }
  }

  onSubmit(): void {
    const { name, username, email, password, confirm_password} = this.form;

    if (!this.passwordMatchValidator(password, confirm_password)) {
      return
    }

    this.authService.register(name, username, email, password, false).subscribe({
      next: res => {
        msg.fire(
          "Berhasil", 
          "Periksa email " + res.data.email + " anda untuk mengaktifkan akun Portal Pertanian Terintegrasi", 
          "success",
        );

        setTimeout(() => {
          this.router.navigate(["/dashboard"]);
        },3000);
      },
      error: err => {
        this.isRegisterFailed = true;
        this.errorMessage = err.error.message.error;
      }
    })
  }


  openModal() {
    if (!this.acceptedTerms) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'Syarat dan Ketentuan';
    }
  }

  passwordMatchValidator(password: string, confirmPassword: string): boolean {
    this.isEqual = false; 
    if (password === confirmPassword) {
      this.isEqual = true; 
    }
    return this.isEqual;
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const minLength = 8;
  
    if (!hasUpperCase || !hasLowerCase || !hasNumber || value.length < minLength) {
      return { 'passwordRequirements': true };
    }
  
    return null;
  }
}
