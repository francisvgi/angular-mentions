import { Component } from '@angular/core';

import { COMMON_NAMES } from '../common-names';
import { MentionConfig } from 'mention';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html'
})
export class DemoTemplateComponent {

  format = (item: any) => {
    return `[${item.username}]`;
  }

  complexItems: MentionConfig = {
    mentions: [{
      items: COMMON_NAMES.map(name => {
        return { label: name, username: name.toLowerCase() };
      }),
      labelKey: "name",
      triggerChar: "#",
      maxItems: 10,
    }]
  }
}
