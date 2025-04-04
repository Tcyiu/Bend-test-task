import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import Area from '../../interfaces/area.interface';
import Thing from '../../interfaces/thing.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  standalone: false,
  templateUrl: './async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncComponent {
  private dataService = inject(DataService);
  areas$: Observable<Area[]> = this.dataService.getAreas();
  things$: Observable<Thing[]> = this.dataService.getThings();
}
