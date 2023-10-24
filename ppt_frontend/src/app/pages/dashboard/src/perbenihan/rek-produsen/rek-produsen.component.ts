import { Component } from '@angular/core';
import { rekProdusen } from "../../../../../_data/perbenihan_cache";
import { RekProdusenService } from "./rek-produsen.service";

@Component({
  selector: 'app-rek-produsen',
  templateUrl: './rek-produsen.component.html',
  styleUrls: ['./rek-produsen.component.scss']
})
export class RekProdusenComponent {
  data: any[] = [];
  originalData: any[] = []; 
  p: number = 1; 
  searchQuery: string = '';
  totalPages: number = 1; 

  constructor(private service: RekProdusenService) {}

  ngOnInit() {
    this.service.GetData().subscribe({
      next: res => {
        if (res.data.length > 0) {
          console.log("==============");
          console.log(res.data);
          this.originalData = res.data;
        } else {
          this.originalData = rekProdusen;
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
