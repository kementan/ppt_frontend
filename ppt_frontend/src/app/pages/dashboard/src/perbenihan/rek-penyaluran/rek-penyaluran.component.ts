import { Component } from '@angular/core';
import { rekPenyaluran } from "../../../../../_data/perbenihan_cache";
import { RekPenyaluranService } from "./rek-penyaluran.service";

@Component({
  selector: 'app-rek-penyaluran',
  templateUrl: './rek-penyaluran.component.html',
  styleUrls: ['./rek-penyaluran.component.scss']
})
export class RekPenyaluranComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekPenyaluranService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          this.originalData = res.data;
        } else {
          this.originalData = rekPenyaluran;
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
