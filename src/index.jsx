import React from 'react';
import { render } from 'react-dom';
import * as _ from 'lodash';
import SearchContainer from './components/SearchContainer';
import SearchResult from './components/SearchResult';

const itemList = require('./itemList');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      viewWorstOffenders: false,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.toggleWorstOffenders = this.toggleWorstOffenders.bind(this);
  }
  updateSearch(e) {
    const query = e.currentTarget.value;
    if (query.length === 0) {
      this.setState({
        searchResults: [],
      });
      return;
    }
    this.setState({
      searchResults: _.filter(itemList, item => _.includes(item, query)),
    });
  }
  toggleWorstOffenders() {
    this.setState({
      viewWorstOffenders: !this.state.viewWorstOffenders,
    });
  }
  render() {
    const resultList = this.state.searchResults.map(result =>
      (<SearchResult itemTitle={result} description="something" />));

    return (
      <div>
        <div className="background-image" />
        <div className="main-container">
          <h1>Site Title</h1>
          <div className="content-box">
            <div className="site-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br /><br />
                Search for test or test123.
              </p>
            </div>
            <button className="button-red worst-offenders" onClick={this.toggleWorstOffenders}>
              View Worst Offenders
            </button>
            <SearchContainer onUpdateSearch={this.updateSearch} />
            { this.state.searchResults.length ? resultList : null}
          </div>
          { this.state.viewWorstOffenders ?
            <div className="content-box">
              <h2>WORST OFFENDERS</h2>
              <SearchResult itemTitle="Worst Offender 1" description="Bad hombres" />
              <SearchResult itemTitle="Worst Offender 2" description="More bad hombres" />
            </div>
          : null }
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.querySelector('#app'), // eslint-disable-line no-undef
);
