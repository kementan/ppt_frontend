import { Component } from "@angular/core";
import * as chartData from "../../../../../_data/chart"

@Component({
  selector: "app-production",
  templateUrl: "./production.component.html",
  styleUrls: ["./production.component.scss"]
})
export class ProductionComponent {
  public data = chartData.production
}
