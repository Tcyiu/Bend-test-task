import { Component, inject, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private dataService = inject(DataService);
  title = 'bend-test-task';

  ngOnInit(): void {
    this.getAreas();
    this.getThings();
  }

  private getAreas() {
    this.dataService.getAreas().subscribe(areas => {
      console.log(areas);
    });
  }

  private getThings() {
    this.dataService.getThings().subscribe(things => {
      console.log(things);
    });
  }
}
