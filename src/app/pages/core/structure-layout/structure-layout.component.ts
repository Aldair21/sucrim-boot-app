import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-structure-layout',
  standalone: true,
  imports: [MatIconModule, RouterOutlet],
  templateUrl: './structure-layout.component.html',
  styleUrl: './structure-layout.component.scss'
})
export class StructureLayoutComponent {

}
