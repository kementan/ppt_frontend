import { Component } from '@angular/core';
import * as chartData from "../../../../../_data/chart"

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent {
  public data = chartData.consumption

}
