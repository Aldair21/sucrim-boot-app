import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
@Component({
  selector: 'app-bot-flow-designer',
  standalone: true,
  imports: [ MatSidenavModule, MatIconModule, MatButtonModule, NgClass],
  templateUrl: './bot-flow-designer.component.html',
  styleUrl: './bot-flow-designer.component.scss'
})
export class BotFlowDesignerComponent {
  blocks= [
    { icon: 'fa-regular fa-message', name: 'Mensaje' },
    { icon: 'fas fa-at', name: 'Entrada' },
    { icon: 'fa-regular fa-image', name: 'Imagen' },
    { icon: 'fa-solid fa-arrows-split-up-and-left', name: 'Condicional' },
    { icon: 'fa-solid fa-list-check', name: 'Validaciones' },
    { icon: 'fab fa-google-drive', name: 'Botones' },
    { icon: 'fas fa-file-signature', name: 'File Log' },
    { icon: 'fa-brands fa-font-awesome', name: 'Finalizar chat' },
    { icon: 'fas fa-code', name: 'Template' },
    { icon: 'fas fa-code-branch', name: 'Multiple inputs/outputs' }
  ];

  // constructor(){
  //   sw
  // }
}

