import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import Area from '../../interfaces/area.interface';
import Thing from '../../interfaces/thing.interface';

@Component({
  selector: 'app-async',
  standalone: false,
  templateUrl: './async.component.html',
})
export class AsyncComponent implements OnInit {
  private dataService = inject(DataService);
  areas?: Area[];
  things?: Thing[];

  ngOnInit(): void {
    this.getAreas();
    this.getThings();
  }

  private getAreas() {
    this.dataService.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);
    });
  }

  private getThings() {
    this.dataService.getThings().subscribe(things => {
      this.things = things;
      console.log(things);
    });
  }
}
