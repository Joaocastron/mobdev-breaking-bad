import { FavouriteService } from '../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-death-details',
  templateUrl: './death-details.page.html',
  styleUrls: ['./death-details.page.scss'],
})
export class DeathDetailsPage implements OnInit {

    death: any;
    death_Id = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {

    this.death_Id = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getDeath(this.death_Id).subscribe(res => {
      this.death = res[0];
    });

  }
}