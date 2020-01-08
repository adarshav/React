import React from "react";
import {Card } from './card-component';
import './card-list-styles.css'

export const CardList = props => {
    return <div className = 'card-list'> 
        { props.monsters.map(monster => (
            <Card key = {monster.id} monster = {monster} />
            // passing the each of the monster into card component using props as previously used for card-list-component 
        ))}
    </div>//the className here mentioned is class selector used in css file
    // Here {props.children } means whatever comes there are considered as children
}