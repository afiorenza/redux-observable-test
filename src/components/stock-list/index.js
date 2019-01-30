import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSymbols } from '../../store/epics/stock';

class StockList extends Component {

  handleChange = e => {
    this.props.searchSymbol(e.target.value);
  }

  render() {
    return (
      <div>
        <label>
          <div>Search symbols</div>

          <input
            onChange={this.handleChange}
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
      searchSymbol: () => dispatch(fetchSymbols('asd'))
    };
  }
)(StockList);
