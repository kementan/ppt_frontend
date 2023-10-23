import { Component, OnInit, OnDestroy } from "@angular/core";
import { LandStatusService } from "../land-status.service";
import { Subscription } from 'rxjs';

const Swal = require("sweetalert2")

@Component({
  selector: "app-land-status-cu",
  templateUrl: "./land-status-cu.component.html",
  styleUrls: ["./land-status-cu.component.scss"]
})
export class LandStatusCuComponent implements OnInit, OnDestroy {
  activeLabel: string;
  id: string;
  form: any = {
    name: null,
    color: "#006600",
  }
  private subs1: Subscription;

  constructor(private landStatusService: LandStatusService) { }

  ngOnInit(): void {
    this.landStatusService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.subs1 = this.landStatusService.getID().subscribe((id) => {
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
    this.landStatusService.getDataByID(this.id).subscribe(
      (res) => {
        this.form.name = res.data.name;
        this.form.color = res.data.color;
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
          this.landStatusService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.landStatusService.toggleVisible();
                this.landStatusService.triggerLoadData();
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
          this.landStatusService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.landStatusService.toggleVisible();
                this.landStatusService.triggerLoadData();
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
    this.landStatusService.toggleVisible();
  }
}
