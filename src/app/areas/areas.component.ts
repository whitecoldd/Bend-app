import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreasComponent implements OnInit {



  constructor     
  () { }

  ngOnInit(): void {
  }

}
