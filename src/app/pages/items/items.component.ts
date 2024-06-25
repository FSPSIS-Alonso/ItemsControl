import { Component, inject } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { OITM_RED } from '../../core/interfaces/OITM.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  private router: Router = inject(Router);
  private itemsService: ItemsService = inject(ItemsService);
  private _items: OITM_RED[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.itemsService.getItems().subscribe({
      next: (data) => {
        this._items = data;
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    });
  }

  editItem(item: OITM_RED) {
    // this.itemsService.dataSignal.set(item);
    this.itemsService.dataSignal.update((data) => {
      return item;
    });
    this.itemsService.dataSender.next(item);
    this.router.navigate(['home/item']);
  }

  get items() {
    return this._items;
  }
}
