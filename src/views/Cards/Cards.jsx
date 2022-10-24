import React from 'react';
import Card from '../../components/Card/Card';
import CardsStyles from './Cards.module.css';

function Cards() {
    return (
        <div className={CardsStyles.cards}>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Cards;