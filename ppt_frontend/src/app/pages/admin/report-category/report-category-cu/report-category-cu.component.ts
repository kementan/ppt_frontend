import { Component } from '@angular/core';
import { ReportCategoryService } from "../report-category.service";

const Swal = require("sweetalert2")

@Component({
  selector: 'app-report-category-cu',
  templateUrl: './report-category-cu.component.html',
  styleUrls: ['./report-category-cu.component.scss']
})
export class ReportCategoryCuComponent {
  activeLabel: string;
  id: string;
  form: any = {
    name: null,
  }

  constructor(private reportCategoryService: ReportCategoryService) { }

  ngOnInit(): void {
    this.reportCategoryService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.reportCategoryService.getID().subscribe((id) => {
      this.id = id;
      if (this.id) {
        this.loadFormData();
      }
    });
  }

  loadFormData(): void {
    this.reportCategoryService.getDataByID(this.id).subscribe(
      (res) => {
        this.form.name = res.data.name;
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
          this.reportCategoryService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.reportCategoryService.toggleVisible();
                this.reportCategoryService.triggerLoadData();
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
          this.reportCategoryService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.reportCategoryService.toggleVisible();
                this.reportCategoryService.triggerLoadData();
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
    this.reportCategoryService.toggleVisible();
  }
}
