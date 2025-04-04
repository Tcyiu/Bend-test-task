import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import Area from '../../../interfaces/area.interface';
import Thing from '../../../interfaces/thing.interface';
import Group from '../../../interfaces/group.interface';

@Component({
  selector: 'app-area',
  standalone: false,
  templateUrl: './area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit {
  area = input.required<Area>();
  things = input.required<Thing[]>();
  groups: Group[] = [];

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    // getting unique id's of first things in every group of 2+ things
    const groupsHeads = new Set(
      this.things()
        .filter(thing => thing.joinedWith)
        .map(thing => thing.joinedWith!)
        .sort((a, b) => (this.getSkuById(a) < this.getSkuById(b) ? -1 : 1))
    );

    // addings id's for single-thing groups
    this.things().forEach(thing => {
      if (this.isSingle(thing)) groupsHeads.add(+thing.id);
    });

    groupsHeads.forEach(groupHead => {
      // filling group with things, first - head, then other things
      const groupThings: Thing[] = [
        this.things().find(thing => +thing.id === groupHead)!,
        ...this.things().filter(thing => thing.joinedWith === groupHead),
      ];
      const groupStatus = this.getGroupStatus(groupThings);
      this.groups.push({ headThingId: groupHead, groupStatus, groupThings });
    });
  }

  // this fixed problem when group 9-7 was on 6-13's place
  getSkuById(thingId: number): string | 0 {
    return this.things().find(thing => +thing.id === thingId)?.sku || 0;
  }

  // for single-thing groups
  isSingle(thing: Thing): boolean {
    const alreadyFormsGroup = thing.id in this.groups;
    return !alreadyFormsGroup && !thing.joinedWith;
  }

  getGroupStatus(groupThings: Thing[]): 'open' | 'indeterminate' | 'closed' {
    if (groupThings.every(thing => thing.status === 'open')) return 'open';
    if (groupThings.every(thing => thing.status === 'closed')) return 'closed';
    return 'indeterminate';
  }
}
