import React from 'react';

import UnitList from '../components/UnitList';
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
        <h1>Units</h1>
        <UnitList units={units} />
      </div>
    );
  }
}
