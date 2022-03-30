import React from 'react';
//import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
      </section>
    );
}

export default Gallery;

