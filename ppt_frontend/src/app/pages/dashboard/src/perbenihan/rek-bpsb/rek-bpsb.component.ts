import { Component } from '@angular/core';
import { rekBPSB } from "../../../../../_data/perbenihan_cache";
import { RekBpsbService } from "./rek-bpsb.service";

@Component({
  selector: 'app-rek-bpsb',
  templateUrl: './rek-bpsb.component.html',
  styleUrls: ['./rek-bpsb.component.scss']
})
export class RekBpsbComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekBpsbService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          this.originalData = res.data;
        } else {
          this.originalData = rekBPSB;
        }

        this.totalPages = Math.ceil(this.originalData.length / 10);
        this.data = [...this.originalData];
      },
      error: err => {
        console.log(err);
      }
    });

  }

  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages) return;
    this.p = newPage;
  }
}
