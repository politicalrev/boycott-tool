import React from 'react';

const SearchResult = ({ itemTitle, description }) =>
(
  <div className="search-result">
    <h3>{itemTitle}</h3>
    <span>{description}</span>
  </div>
);

SearchResult.propTypes = {
  itemTitle: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default SearchResult;
