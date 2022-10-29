import React from 'react';
import CardStyles from './Card.module.css';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className={CardStyles.card}>
            <div className={CardStyles.textContainer}>
                <div className={CardStyles.cardText}>
                    <div className={CardStyles.description}>
                        <span className={CardStyles.jobTitle}>{props.jobTitle}</span>
                        <p className={CardStyles.fullName}>{props.fullName}</p>
                        <p className={CardStyles.phone}>{props.phone}</p>
                    </div>
                    <p className={CardStyles.rating}>{props.rating}</p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    jobTitle: PropTypes.string,
    fullName: PropTypes.string,
    phone: PropTypes.string,
    rating: PropTypes.string,
};

export default Card;