import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { Oitm, OITM_RED } from '../core/interfaces/OITM.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private data: any[] = [];

  //signal
  public dataSignal: WritableSignal<OITM_RED> = signal(new OITM_RED());

  //subject
  public dataSender: BehaviorSubject<OITM_RED> = new BehaviorSubject(
    new OITM_RED()
  );

  constructor(private http: HttpClient) {}

  private httpOptions = {
    observe: 'response' as 'response',
  };

  updateItem(item: OITM_RED) {
    const url = `https://192.168.0.130:50000/b1s/v1/Items('${item.ItemCode}')`;
    return this.http.patch(url, item, this.httpOptions);
  }

  createItem(item: OITM_RED) {
    const url = `https://192.168.0.130:50000/b1s/v1/Items`;
    return this.http.post(url, item, this.httpOptions);
  }

  public getItems() {
    if (this.data.length > 0) return of(this.data);
    const url = `https://192.168.0.130:50000/b1s/v1/Items?$filter=startswith(ItemCode, 'TEST01') `;
    return this.http.get(url, this.httpOptions).pipe(
      map((data: any) => {
        return data.body.value;
      }),
      map((values: Oitm[]) => {
        this.data = values.map((item: Oitm) => {
          let aux: OITM_RED = new OITM_RED();
          aux.setValuesFromInterface(item);
          return aux;
        });
        return this.data;
      })
    );
  }
}
