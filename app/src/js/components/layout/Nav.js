import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { location } = this.props;
    const unitsClass = location.pathname === '/' ? 'active' : '';
    const unitTypesClass = location.pathname.match(/^\/unittypes/) ? 'active' : '';
    const changelogClass = location.pathname.match(/^\/changelog/) ? 'active' : '';

    return (
      <nav class='navbar navbar-inverse navbar-fixed-top' role='navigation'>
        <div class='container'>
            <ul class='nav navbar-nav'>
              <li class={unitsClass}>
                <IndexLink to='/'>Manage units</IndexLink>
              </li>
              <li class={unitTypesClass}>
                <Link to='unittypes'>Manage unit types</Link>
              </li>
              <li class={changelogClass}>
                <Link to='changelog'>Change log</Link>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}
