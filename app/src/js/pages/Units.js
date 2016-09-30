import React from 'react';

import UnitList from '../components/units/UnitList';
import * as UnitsActions from '../actions/UnitsActions';
import AdminStore from '../stores/AdminStore';

export default class Units extends React.Component {
  constructor() {
    super();

    this.getUnitList = this.getUnitList.bind(this);

    this.state = {
      units: AdminStore.getAll()
    };
  }

  componentWillMount() {
    AdminStore.on('change', this.getUnitList);
  }

  componentWillUnmount() {
    AdminStore.removeListener('change', this.getUnitList);
  }

  getUnitList() {
    this.setState({
      todos: AdminStore.getAll()
    });
  }

  render() {
    const { units } = this.state;

    return (
      <div>
        <p>
          <a href="#">Create new unit</a>&nbsp; &nbsp; &nbsp; &nbsp;<a href="#">Create new unit from a copy of an exsisting unit</a>
        </p>
        <h3>Units</h3>
        <UnitList units={units} />
      </div>
    );
  }
}
