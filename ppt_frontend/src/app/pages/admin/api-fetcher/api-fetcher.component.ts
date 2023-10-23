import { Component } from '@angular/core';

@Component({
  selector: 'app-api-fetcher',
  templateUrl: './api-fetcher.component.html',
  styleUrls: ['./api-fetcher.component.scss']
})
export class ApiFetcherComponent {
  public sec1_title: string = "Fetch API Data";

  constructor() { }

  ngOnInit(): void { }

  syncData(): void {

  }
}
