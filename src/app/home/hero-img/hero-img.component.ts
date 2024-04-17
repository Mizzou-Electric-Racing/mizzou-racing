import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.css']
})
export class HeroImgComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.adjustFilterOpacity(); // Ensure initial opacity is set
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.adjustFilterOpacity();
  }

  private adjustFilterOpacity() {
    const filterElement = this.el.nativeElement.querySelector('.filter');
    const scrollDepth = window.pageYOffset;
    // Initial opacity starts at 0.5
    let baseOpacity = 0;
    // Calculate additional opacity based on scroll depth, starting immediately
    // Example formula: starts increasing opacity based on scroll depth immediately
    let additionalOpacity = Math.min(scrollDepth / (window.innerHeight / 2), 0.8); // Adjust this value to control the rate of opacity change
    let totalOpacity = baseOpacity + additionalOpacity;
    // Ensure total opacity does not exceed 0.9
    totalOpacity = Math.min(totalOpacity, 0.9);
    filterElement.style.backgroundColor = `rgba(0, 0, 0, ${totalOpacity})`;
  }
}
