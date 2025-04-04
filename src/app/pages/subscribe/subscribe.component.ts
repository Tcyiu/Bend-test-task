import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DataService } from '../../data.service';
import Area from '../../interfaces/area.interface';
import Thing from '../../interfaces/thing.interface';

@Component({
  selector: 'app-subscribe',
  standalone: false,
  templateUrl: './subscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeComponent implements OnInit {
  private dataService = inject(DataService);
  private cdr = inject(ChangeDetectorRef);
  areas?: Area[];
  things?: Thing[];

  ngOnInit(): void {
    this.getAreas();
    this.getThings();
  }

  private getAreas(): void {
    this.dataService.getAreas().subscribe(areas => {
      this.areas = areas;
      this.cdr.markForCheck();
    });
  }

  private getThings(): void {
    this.dataService.getThings().subscribe(things => {
      this.things = things;
      this.cdr.markForCheck();
    });
  }

  getThingsByAreaId(areaId: number): Thing[] {
    return this.things!.filter(thing => thing.areaId === areaId);
  }
}
