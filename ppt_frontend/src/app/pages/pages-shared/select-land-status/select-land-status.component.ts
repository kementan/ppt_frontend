import { Component } from '@angular/core';
import { SelectLandStatusService } from "./select-land-status.service";

@Component({
  selector: 'app-select-land-status',
  templateUrl: './select-land-status.component.html',
  styleUrls: ['./select-land-status.component.scss']
})
export class SelectLandStatusComponent {
  data : any[];

  constructor(private service: SelectLandStatusService) {
    this.service.getList().subscribe({
      next: res => {
        this.data = res.data || [];
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
