import { Component } from "@angular/core";

@Component({
  selector: "app-other",
  templateUrl: "./other.component.html",
  styleUrls: ["./other.component.scss"]
})
export class OtherComponent {
  public show: boolean = false

  toggle() {
    this.show = !this.show
  }
}
