import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Areas, Things } from '../areas';
import { AreasService } from '../areas.service';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.css'],
})
export class AreasListComponent implements OnInit {

  areas!: Areas[];
  area: Areas = new Areas();
  things!: Things[];
  thing: Things = new Things();
  subscription!: Subscription;
  constructor(private areasService: AreasService, private router: Router,){}

  ngOnInit(): void {
    this.areasService.getAreas().subscribe(data =>{
      console.log(data);
      this.areas = data;
    })
    this.areasService.getThings().subscribe(data =>{
      console.log(data);
      this.things = data;
    })
  }

}
