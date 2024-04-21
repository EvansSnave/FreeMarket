import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CustomButton',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() textButton: string;

  constructor() {
    this.textButton = 'Default';
  }

  ngOnInit() {
  }

}
