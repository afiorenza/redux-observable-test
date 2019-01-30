import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSymbols } from '../../store/epics/stock';
import { fromEventPattern } from 'rxjs';
import { filter, debounceTime, map } from 'rxjs/operators';

class StockList extends Component {

  constructor(props) {
    super(props);

    fromEventPattern(
      handler => this.handleSearchSymbolChange = handler
    )
      .pipe(
        map(e => e.target.value),
        filter(value => value.length >= 3),
        debounceTime(1000)
      )
      .subscribe(value => this.props.searchSymbol(value))
  }

  render() {
    return (
      <div>
        <label>
          <div>Search symbols</div>

          <input
            onChange={this.handleSearchSymbolChange}
            type='text' />
        </label>

        {
          this.props.error
            ? <p>{this.props.error}</p>
            : this.props.fetchSymbolOngoing
              ? <p>Loading...</p>
              : <ul>
                {
                  this.props.bestMatches.map((bestMatch) =>
                    <li
                      key={bestMatch['1. symbol']}>
                      {bestMatch['1. symbol']} - {bestMatch['2. name']}
                    </li>
                  )}
              </ul>
        }
      </div>
    )
  }
}

export default connect(
  ({ stock }) => {
    return {
      bestMatches: stock.bestMatches,
      error: stock.error,
      fetchSymbolOngoing: stock.fetchSymbolOngoing
    };
  },
  dispatch => {
    return {
      searchSymbol: value => dispatch(fetchSymbols(value))
    };
  }
)(StockList);
