import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import Area from '../../interfaces/area.interface';
import Thing from '../../interfaces/thing.interface';

@Component({
  selector: 'app-subscribe',
  standalone: false,
  templateUrl: './subscribe.component.html',
})
export class SubscribeComponent implements OnInit {
  private dataService = inject(DataService);
  areas?: Area[];
  things?: Thing[];

  ngOnInit(): void {
    this.getAreas();
    this.getThings();
  }

  private getAreas(): void {
    this.dataService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
  }

  private getThings(): void {
    this.dataService.getThings().subscribe(things => {
      this.things = things;
    });
  }

  getThingsByAreaId(areaId: number): Thing[] {
    return this.things!.filter(thing => thing.areaId === areaId);
  }
}
