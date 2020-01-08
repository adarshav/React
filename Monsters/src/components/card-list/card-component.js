import React from 'react';
import './card-component-styles.css';

export const Card = props => (
    <div className = 'card-container'>
        <img alt = "monsters" src = {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        {/* robohash is unique webservice which provides whatever image depends on the numbers u give as input (robot, alien, monsters) */}
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)