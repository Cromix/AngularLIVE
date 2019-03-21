import { Component, OnInit } from '@angular/core';
import { HumansService } from '../services/humans.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public humans = [];
  constructor(private _humansService:HumansService) { }

  ngOnInit() {
    this._humansService.getHumans()
    .subscribe(data => this.humans = data);

    console.log(this.humans);
  }

}
