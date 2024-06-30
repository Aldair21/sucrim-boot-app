import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSlideToggleModule , NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listBots = [
    {
      "name": "Zeplin", 
      "image": "https://i.postimg.cc/T3M0b6n1/zepeling.png",
      "active": true, 
      "description": "Collaboration between designers and developers."
    },
    {
      "name": "GitHub", 
      "image": "https://i.postimg.cc/MHtcp101/github.png",
      "active": true, 
      "description": "Link pull requests and automate workflows."
    },
    {
      "name": "Figma", 
      "image": "https://i.postimg.cc/kMQFw4PW/figma.png",
      "active": true, 
      "description": "Embed file previews in projects."
    },
    {
      "name": "Zapier", 
      "image": "https://i.postimg.cc/DZyBzPLc/zapier.png",
      "active": false, 
      "description": "Build custom automations and integrations with apps."
    },
    {
      "name": "Notion", 
      "image": "https://i.postimg.cc/yNTLBbgd/notion.png",
      "active": true, 
      "description": "Embed notion pages and notes in projects."
    },
    {
      "name": "Slack", 
      "image": "https://i.postimg.cc/qRbQ66GH/slack.png",
      "active": true, 
      "description": "Send notifications to channels and create projects."
    },
    {
      "name": "Zendesk", 
      "image": "https://i.postimg.cc/GttLqWdD/zendesk.png",
      "active": true, 
      "description": "Link and automate Zendesk tickets."
    },
    {
      "name": "Atlassian JIRA", 
      "image": "https://i.postimg.cc/rwxhZmq5/atlassian-jira.png",
      "active": false, 
      "description": "Plan, track, and release great software."
    },
    {
      "name": "Dropbox", 
      "image": "https://i.postimg.cc/ZYQVT3Rr/dropbox.png",
      "active": true, 
      "description": "Everything you need for work, all in one place."
    },
    {
      "name": "Google Chrome", 
      "image": "https://i.postimg.cc/tCzkRgr9/google.png",
      "active": true, 
      "description": "Link your Google account to share bookmarks across your entire team."
    },
    {
      "name": "Discord", 
      "image": "https://i.postimg.cc/WzxnXRK9/discordia.png",
      "active": true, 
      "description": "Keep in touch with your customers without leaving the app."
    },
    {
      "name": "Google Drive", 
      "image": "https://i.postimg.cc/C5R7GMvB/google-drive.png",
      "active": false, 
      "description": "Link your Google account to share files across your entire team."
    }
  ];
  
}
