import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, AfterViewChecked {
  title = 'shop';

  @ViewChild('appTitle', { read: ElementRef })
  appTitle: ElementRef;

  constructor(private changeDetector: ChangeDetectorRef ) {}

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Product store';
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
}
