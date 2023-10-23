import { Component, Input, Output, EventEmitter } from "@angular/core";
import { SubSectorService } from "./checkbox-sub-sector.service";

@Component({
  selector: "app-checkbox-sub-sector",
  templateUrl: "./checkbox-sub-sector.component.html",
  styleUrls: ["./checkbox-sub-sector.component.scss"]
})
export class CheckboxSubSectorComponent {
  data : any[];
  @Input() selectedCommodities: string[] = [];

  constructor(private service: SubSectorService) {
    this.service.getList().subscribe({
      next: res => {
        this.data = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  @Output() selectedCommoditiesChange = new EventEmitter<string[]>();
  @Input()
  get selectedCommoditiesValue(): string[] {
    return this.selectedCommodities;
  }

  set selectedCommoditiesValue(value: string[]) {
    this.selectedCommodities = value;
    this.selectedCommoditiesChange.emit(this.selectedCommodities);
  }

  toggleCommodity(id: string) {
    const index = this.selectedCommodities.indexOf(id);
    if (index !== -1) {
      // ID exists, remove it
      this.selectedCommodities.splice(index, 1);
    } else {
      // ID doesn't exist, add it
      this.selectedCommodities.push(id);
    }
    // Emit the updated array
    this.selectedCommoditiesChange.emit(this.selectedCommodities);
  }
}
