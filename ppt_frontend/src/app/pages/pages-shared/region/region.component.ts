import { Component, Output, EventEmitter } from "@angular/core";
import { RegionService } from "./region.service"

@Component({
  selector: "app-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.scss"]
})
export class RegionComponent {
  provinsiData: any[];
  kabupatenData: any[];
  kecamatanData: any[];
  desaData: any[];

  @Output() provinsiSelected = new EventEmitter<string>();
  @Output() kabupatenSelected = new EventEmitter<string>();
  @Output() kecamatanSelected = new EventEmitter<string>();
  @Output() desaSelected = new EventEmitter<string>();


  constructor(private regionService: RegionService) {
    this.regionService.getList("1", null)
        .subscribe((data: any) => {
            this.provinsiData = data.data || [];
        });
  }

  onRegionSelected(el:string, level:string, selectedCode: string) {
    if (el == "prov") {
      this.provinsiSelected.emit(selectedCode);
    } else if (el == "kab") {
      this.kabupatenSelected.emit(selectedCode);
    } else if (el == "kec") {
      this.kecamatanSelected.emit(selectedCode);
    } else {
      this.desaSelected.emit(selectedCode);
    }

    this.regionService.getList(level, selectedCode)
        .subscribe((data: any) => {
          if (level == "1") { 
            this.kabupatenData = [];
            this.kecamatanData = [];
            this.desaData = [];
          } else if (level == "2") {
            this.kabupatenData = data.data || [];
            this.kecamatanData = [];
            this.desaData = [];
          } else if (level == "3") {
            this.kecamatanData = data.data || [];
            this.desaData = [];
          } else if (level == "4") {
            this.desaData = data.data || [];
          }
        });
  }

}
