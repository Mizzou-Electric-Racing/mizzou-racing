import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = 'https://cdn.logwork.com/widget/countdown.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
