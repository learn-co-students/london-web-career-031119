import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const MuseumPicker = ({ updateFilter, museumFilter }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          className={`${museumFilter === '' ? 'active' : ''} item`}
          onClick={() => updateFilter('')}
        >
            All Museums
        </div>
        <div
          className={`${museumFilter === 'National Gallery of Art, Washington D.C.' ? 'active' : ''} item`}
          onClick={() => updateFilter('National Gallery of Art, Washington D.C.')}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  museumFilter: state.museumFilter
})

export default connect(mapStateToProps, actions)(MuseumPicker);
