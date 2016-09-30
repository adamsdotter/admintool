import React from 'react';

export default class UnitListItem extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, last_updated } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{last_updated}</td>
      </tr>
    );
  }
}
