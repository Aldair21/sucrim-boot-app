import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-structure-layout',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './structure-layout.component.html',
  styleUrl: './structure-layout.component.scss'
})
export class StructureLayoutComponent {

}
