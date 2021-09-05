import { Component, ViewChildren, QueryList } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { GroupResult, process, State } from '@progress/kendo-data-query';
/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/kendo-grid-groupable-columns-example-kendo-ui-for-angular-d49a434ed568?sk=032875562544863279f76790d0c82641
 * */
export class NgKendoGroupableDemo {
  Order_id: boolean = true;
  ProductName: boolean = false;
  constructor() {
    //Object.assign(this,values); //if requres
  }
}
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public state: State = {
    skip: 0,
    take: 4,
    group: [{ field: 'Discontinued' }, { field: 'UnitPrice' }]
  };

  /** Sample data to bind with Kendo grid */
  public data = [
    {
      Order_id: 1,
      ProductName: 'Vodka',
      UnitPrice: 19.0,
      Quantity: 111,
      Packages_available: 10,
      Packages_status: 'Approved',
      Discontinued: true
    },
    {
      Order_id: 200,
      ProductName: 'Coffee',
      UnitPrice: 19.0,
      Quantity: 12,
      Packages_available: 12,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 300,
      ProductName: 'Vodka',
      UnitPrice: 10.0,
      Quantity: 9999,
      Packages_available: 222,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 116,
      ProductName: 'Bisleri',
      UnitPrice: 10.0,
      Quantity: 9999,
      Packages_available: 222,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 14,
      ProductName: 'Milk',
      UnitPrice: 22.0,
      Quantity: 1131,
      Packages_available: 2231,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 128,
      ProductName: 'Red Wine',
      UnitPrice: 22.0,
      Quantity: 1131,
      Packages_available: 2231,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 50,
      ProductName: 'Mojito',
      UnitPrice: 21.35,
      Quantity: 1141,
      Packages_available: 2241,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 600,
      ProductName: 'Coffee',
      UnitPrice: 25.0,
      Quantity: 109,
      Packages_available: 2252,
      Packages_status: 'Approved',
      Discontinued: false
    },
    {
      Order_id: 700,
      ProductName: 'Chai',
      UnitPrice: 800.8,
      Quantity: 108,
      Packages_available: 2262,
      Packages_status: 'Approved',
      Discontinued: true
    }
  ];

  /**Process data for the kendogrid binding, it requireds value for [data] in this format. */
  public gridData: any = process(this.data, this.state);

  /** On change of data state, the below method will be called, update process of the kendo grid */
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.data, this.state);
  }

  /** checkGroup will find the number of children and returns data accordingly, it will also change your JSON structure, console if you want to see what is changed there! */
  public checkGroup(group: GroupResult): void {
    const leafItems = this.getGroupItems(group);
    const shouldCheck = leafItems.some(item => !item.checked);

    leafItems.forEach(item => (item.checked = shouldCheck));
  }

  /** Checking Groups with their JSON key values */
  public isGroupResult(item: object): item is GroupResult {
    return (
      item.hasOwnProperty('items') &&
      item.hasOwnProperty('value') &&
      item.hasOwnProperty('field')
    );
  }

  /** get data from Items (data after grouping the columns) or their respective child items */
  public getGroupItems(group: GroupResult): any[] {
    if (!group || !this.isGroupResult(group) || group.items.length === 0) {
      return [];
    }

    if (!this.isGroupResult(group.items[0])) {
      return group.items;
    }

    let descendants: any[] = [];

    group.items.forEach(
      (item: GroupResult) =>
        (descendants = descendants.concat(this.getGroupItems(item)))
    );

    return descendants;
  }

  /** Manage checkbox leaf items if all children are selected, uncheck if not all of the checkboxes under the parent are not selected. */
  public isGroupChecked(group: GroupResult): boolean {
    const leafItems = this.getGroupItems(group);
    return leafItems.every(item => item.checked);
  }
}
