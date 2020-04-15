import { Component } from '@angular/core';
import { MentionConfig } from '../../mention/mention-config';
import { COMMON_NAMES } from '../common-names';
import { COMMON_TAGS } from '../common-tags';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'demo-simple',
  templateUrl: './demo-simple.component.html'
})
export class DemoSimpleComponent {
  mentionItems: MentionConfig;
  ngOnInit(): void {
    const self: this = this;
    this.mentionItems = {

      mentions: [
        {
          items: COMMON_TAGS,
          allowSpace: true,
          triggerChar: '@',
          disableSearch: false
        },
        {
          items: COMMON_TAGS,
          allowSpace: true,
          triggerChar: '#',
          disableSearch: false
        },
        {
          items: COMMON_NAMES,
          allowSpace: true,
          triggerChar: '',
          disableSearch: false
        },
        {
          items: COMMON_NAMES,
          allowSpace: true,
          triggerChar: ' ',
          disableSearch: false
        },
        {
          items: [
            {
              id: 1,
              name: "community_A"
            },
            {
              id: 2,
              name: "community_B"
            }
          ],
          labelKey: "name",
          triggerChar: "~",
          disableSearch: false
        }
      ]
    }

  }

  selectedTerm(item: any) {
    console.log(item);
  }
}
