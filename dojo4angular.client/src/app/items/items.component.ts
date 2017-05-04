import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items = [];
  constructor(private itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getItems();
  }

}
