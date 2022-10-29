/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Card from '../../components/Card/Card';
import CardsStyles from './Cards.module.css';
import leftIcon from '../../assets/img/leftIcon.svg';
import rightIcon from '../../assets/img/rightIcon.svg';
import arrowUp from '../../assets/img/arrowUp.svg';
import arrowDown from '../../assets/img/arrowDown.svg';

function Cards(props) {
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const countItemsPerPage = () => {
        const width = window.screen.availWidth;
        if (width > 878) {
            setItemsPerPage(9);
        } else if (width < 878 && width > 578) {
            setItemsPerPage(6);
        } else {
            setItemsPerPage(3);
        }
    };

    useEffect(() => {
        countItemsPerPage();
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(props.data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(props.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, props.data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className={CardsStyles.sortPanel}>
                <p>{props.data ? props.data.length : 0} results</p>
                <div className={CardsStyles.sortOptions}>
                    <p className={CardsStyles.sortHeader}>Sort by:</p>
                    <button 
                        value='cost'
                        onClick={(event) => props.sortByCost(event.target.value)}
                        data-state={`${props.currentSort == 'cost' ? 'active' : ''}`}
                        className={CardsStyles.sortButton}>
                        Rating
                        <img src={`${props.costSort ? arrowUp : arrowDown}`}/>
                    </button>
                    <button 
                        value='alphabet'
                        onClick={(event) => props.sortByAlphabet(event.target.value)}
                        data-state={`${props.currentSort == 'alphabet' ? 'active' : ''}`}
                        className={CardsStyles.sortButton}>
                        Names
                        <img src={`${props.alphabetSort ? arrowUp : arrowDown}`}/>
                    </button>
                </div>
            </div>
            <div className={CardsStyles.cards}>
                {currentItems ? currentItems.map((card) => 
                    <Card
                        alt='card'
                        key={card.id}
                        jobTitle={card.jobTitle}
                        fullName={card.fullName}
                        phone={card.phone}
                        rating={card.rating} />
                ) : <p>Not found.</p>
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<img src={rightIcon} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel={<img src={leftIcon} />}
                renderOnZeroPageCount={null}
                containerClassName={CardsStyles.pagination}
                pageLinkClassName={CardsStyles.pageNum}
                previousLinkClassName={`${CardsStyles.pageNum} ${CardsStyles.prevButton}`}
                nextLinkClassName={`${CardsStyles.pageNum} ${CardsStyles.nextButton}`}
                activeLinkClassName={CardsStyles.active} />
        </>
    );
}

Cards.propTypes = {
    data: PropTypes.array,
    costSort: PropTypes.bool,
    alphabetSort: PropTypes.bool,
    sortByCost: PropTypes.func,
    sortByAlphabet: PropTypes.func,
    currentSort: PropTypes.string
};

export default Cards;