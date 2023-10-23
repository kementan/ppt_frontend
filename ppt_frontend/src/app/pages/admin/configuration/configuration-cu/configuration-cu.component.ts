import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigurationService } from "../configuration.service";
import { Subscription } from 'rxjs';

const Swal = require("sweetalert2")

@Component({
  selector: 'app-configuration-cu',
  templateUrl: './configuration-cu.component.html',
  styleUrls: ['./configuration-cu.component.scss']
})
export class ConfigurationCuComponent implements OnInit, OnDestroy {
  activeLabel: string;
  id: string;
  form: any = {
    name: null,
    value: null,
  }
  private subs1: Subscription;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.subs1 = this.configurationService.getID().subscribe((id) => {
      this.id = id;
      if (this.id) {
        this.loadFormData();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subs1) {
      this.subs1.unsubscribe();
    }
  }

  loadFormData(): void {
    this.configurationService.getDataByID(this.id).subscribe(
      (res) => {
        this.form.name = res.data.name;
        this.form.value = res.data.value;
      }
    );
  }

  doSave(): void {
    Swal.fire({
      text: "Simpan " + this.activeLabel + " ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id) {
          this.configurationService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.configurationService.toggleVisible();
                this.configurationService.triggerLoadData();
              } else {
                Swal.fire({
                  text: res.message,
                  icon: "warning"
                })
              }
            },
            error: err => {
              Swal.fire({
                text: err.error.message.error,
                icon: "warning"
              })
            } 
          });
        } else {
          this.configurationService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.configurationService.toggleVisible();
                this.configurationService.triggerLoadData();
              } else {
                Swal.fire({
                  text: res.message,
                  icon: "warning"
                })
              }
            },
            error: err => {
              Swal.fire({
                text: err.error.message.error,
                icon: "warning"
              })
            } 
          });
        }
      }
    });
  }

  doCancel(): void {
    this.configurationService.toggleVisible();
  }
}
