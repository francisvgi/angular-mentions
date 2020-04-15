import { Component } from '@angular/core';
import { MentionConfig } from 'mention';

@Component({
  selector: 'app-demo-options',
  templateUrl: './demo-options.component.html'
})
export class DemoOptionsComponent {

  format(item: any) {
    return item['value'].toUpperCase();
  }

  complexItems: MentionConfig = {
    mentions: [
      {
        items: [{
          "value": "user1",
          "email": "user1@domain.com",
          "name": "User One"
        },
        {
          "value": "user2",
          "email": "user2@domain.com",
          "name": "User Two"
        },
        {
          "value": "user3",
          "email": "user3@domain.com",
          "name": "User Three"
        }],
        labelKey: "name",
        triggerChar: "#",
        maxItems: 10
      }
    ]
  }
}
