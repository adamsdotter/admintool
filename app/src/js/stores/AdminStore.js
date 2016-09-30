import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class AdminStore extends EventEmitter {
  constructor() {
    super();
    this.units = [
      {
        "name": "Unit A",
        "last_updated": "2015-01-13",
        "id": 123555
      },
      {
        "name": "Unit b",
        "last_updated": "2015-01-13",
        "id": 12355599
      },
      {
        "name": "Unit C",
        "last_updated": "2015-01-15",
        "id": 12355577
      },
      {
        "name": "Unit A1",
        "last_updated": "2015-03-13",
        "id": 123555111
      },
      {
        "name": "Unit 1234",
        "last_updated": "2016-01-20",
        "id": 123555222
      },
      {
        "name": "Unit ABC",
        "last_updated": "2016-04-13",
        "id": 12355544
      }
    ];
  }

  getAll() {
    return this.units;
  }
}

const adminStore = new AdminStore();

export default adminStore;
