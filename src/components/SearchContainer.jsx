import React from 'react';

const SearchContainer = props =>
(
  <div className="search-container">
    <input type="text" placeholder="Or search for products and companies" onChange={props.onUpdateSearch} />
  </div>
);

SearchContainer.propTypes = {
  onUpdateSearch: React.PropTypes.func.isRequired,
};

export default SearchContainer;
