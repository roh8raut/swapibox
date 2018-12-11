import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';
import lightsabers from '../../images/lightsabers.png';

const Favorites = ({ faves, viewFavorites, showFavorites }) => (
  <div>
  <div className="favorites-container">
    <div
      className="num-favorites"
    >
      {faves.length}
    </div>
    <img
      className="lightsaber"
      src={lightsabers}
      alt="favorites"
    />
    <button
      type="button"
      className="favorites-button"
      onClick={viewFavorites}
    >
      view favorites
    </button>
  </div>
  <div className={(showFavorites ? "favorite-cards" : "hidden" )}>
    {}
  </div>
   </div>
);

Favorites.propTypes = {
  faves: PropTypes.array.isRequired,
  viewFavorites: PropTypes.func.isRequired,
};

export default Favorites;
