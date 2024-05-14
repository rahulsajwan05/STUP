import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input()
  sendStoredTheme: any = "";

  @Output()
  modeHandle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callTheme() {
    this.modeHandle.emit();
  }

}
