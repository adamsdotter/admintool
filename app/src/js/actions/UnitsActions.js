import dispatcher from '../dispatcher';

export function fetchUnits() {
  dispatcher.dispatch({type: 'FETCH_UNITS'});

    fetch('../../data/units.json')
      .then((res) => res.json())
      .then((data) => {
        dispatcher.dispatch({type: 'RECEIVE_UNITS', data: data});
      })
      .catch(function(error) {
          dispatcher.dispatch({type: 'FETCH_UNITS__ERROR', error: error});
      });
}
