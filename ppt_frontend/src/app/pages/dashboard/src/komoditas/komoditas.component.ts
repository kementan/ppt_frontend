import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-komoditas',
  templateUrl: './komoditas.component.html',
  styleUrls: ['./komoditas.component.scss']
})
export class KomoditasComponent implements AfterViewInit {
  @ViewChild('tableauViz') tableauViz: ElementRef;

  ngAfterViewInit(): void {
    const divElement = document.getElementById('viz1697532051785');
    const vizElement = divElement.getElementsByTagName('object')[0];

    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '100%';
      vizElement.style.height = divElement.offsetWidth * 0.75 + 'px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '100%';
      vizElement.style.height = 'auto';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = 'auto';
    }

    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
