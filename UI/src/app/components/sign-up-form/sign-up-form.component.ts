import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit, AfterViewInit {
  @ViewChild('path') path: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, private element: ElementRef) { 
    this.path = this.element.nativeElement;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
      this.renderer.listen(this.path.nativeElement, 'click', () => {
        this.click();
      });
  }

  click():void {
    this.path.nativeElement.setAttribute("d", "M 0 0 L 212 410 L 374 342 L 149 97 Z");
  }

}
