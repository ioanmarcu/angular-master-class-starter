import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() {
  }

  select(tab: TabComponent) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }
}
