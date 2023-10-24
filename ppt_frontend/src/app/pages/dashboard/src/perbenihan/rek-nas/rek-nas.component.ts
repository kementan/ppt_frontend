import { Component } from '@angular/core';
import { rekNas } from "../../../../../_data/perbenihan_cache";
import { RekNasService } from "./rek-nas.service";

@Component({
  selector: 'app-rek-nas',
  templateUrl: './rek-nas.component.html',
  styleUrls: ['./rek-nas.component.scss']
})
export class RekNasComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekNasService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          this.originalData = res.data;
        } else {
          this.originalData = rekNas;
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
