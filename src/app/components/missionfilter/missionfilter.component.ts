import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  @Output() filterYear = new EventEmitter<number>();

  onFilterChange(event: any): void {
    const year = parseInt(event.target.value, 10);
    this.filterYear.emit(year);
  }
}
