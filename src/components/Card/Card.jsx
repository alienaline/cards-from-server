import React from 'react';
import CardStyles from './Card.module.css';

function Card() {
    return (
        <div className={CardStyles.card}>
            <img 
                className={CardStyles.img}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' />
            <div className={CardStyles.textContainer}>
                <div className={CardStyles.cardText}>
                    <span className={CardStyles.series}>Серия</span>
                    <p className={CardStyles.title}>ЗАГОЛОВОК</p>
                    <p className={CardStyles.cost}>1 000 ₽</p>
                </div>
            </div>
        </div>
    );
}

export default Card;