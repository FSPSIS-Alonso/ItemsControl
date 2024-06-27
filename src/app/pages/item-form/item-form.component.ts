import { Component, inject } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { OITM_RED } from '../../core/interfaces/OITM.interface';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss',
})
export class ItemFormComponent {
  itemsService: ItemsService = inject(ItemsService);
  private _item: OITM_RED = new OITM_RED();
  // private _itemAux: OITM_RED = new OITM_RED();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._item = this.itemsService.dataSignal();
    // this.itemsService.dataSender.subscribe({
    //   next: (data) => {
    //     this._itemAux = data;
    //     this._item = JSON.parse(JSON.stringify(this._itemAux));
    //     console.log(this._item);
    //   },
    //   error: () => {},
    //   complete: () => {},
    // });
  }

  onSaveItem() {
    if (this._item.isNew) {
      this.itemsService.createItem(this._item).subscribe();
    } else {
      this.itemsService.updateItem(this._item).subscribe();
    }
  }

  get item() {
    return this._item;
  }
}
