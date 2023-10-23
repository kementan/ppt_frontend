import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSectorService } from "../sub-sector.service";
import { Subscription } from 'rxjs';

const Swal = require("sweetalert2")

@Component({
  selector: 'app-sub-sector-cu',
  templateUrl: './sub-sector-cu.component.html',
  styleUrls: ['./sub-sector-cu.component.scss']
})
export class SubSectorCuComponent implements OnInit, OnDestroy {
  activeLabel: string;
  id: string;
  form: any = {
    name: null,
    description: null,
  }
  private subs1: Subscription;

  constructor(private commodityService: SubSectorService) { }

  ngOnInit(): void {
    this.commodityService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.subs1 = this.commodityService.getID().subscribe((id) => {
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
    this.commodityService.getDataByID(this.id).subscribe(
      (res) => {
        this.form.name = res.data.name;
        this.form.description = res.data.description;
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
          this.commodityService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.commodityService.toggleVisible();
                this.commodityService.triggerLoadData();
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
          this.commodityService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.commodityService.toggleVisible();
                this.commodityService.triggerLoadData();
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
    this.commodityService.toggleVisible();
  }
}
