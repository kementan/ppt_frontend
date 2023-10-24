import { Component } from '@angular/core';
import { rekPenyebaran } from "../../../../../_data/perbenihan_cache";
import { RekPenyebaranService } from "./rek-penyebaran.service";

@Component({
  selector: 'app-rek-penyebaran',
  templateUrl: './rek-penyebaran.component.html',
  styleUrls: ['./rek-penyebaran.component.scss']
})
export class RekPenyebaranComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekPenyebaranService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          this.originalData = res.data;
        } else {
          this.originalData = rekPenyebaran;
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
