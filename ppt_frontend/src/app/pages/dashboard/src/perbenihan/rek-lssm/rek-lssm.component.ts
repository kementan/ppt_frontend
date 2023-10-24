import { Component } from '@angular/core';
import { rekLSSM } from "../../../../../_data/perbenihan_cache";
import { RekLssmService } from "./rek-lssm.service";

@Component({
  selector: 'app-rek-lssm',
  templateUrl: './rek-lssm.component.html',
  styleUrls: ['./rek-lssm.component.scss']
})
export class RekLssmComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekLssmService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          this.originalData = res.data;
        } else {
          this.originalData = rekLSSM;
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
