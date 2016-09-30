import React from 'react';
import UnitListItem from './UnitListItem';

export default class UnitList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, last_updated } = this.props;

    const UnitListItems = this.props.units.map((unit) => {
        return <UnitListItem key={unit.id} {...unit}/>;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>
          {UnitListItems}
        </tbody>
      </table>
    );
  }
}
