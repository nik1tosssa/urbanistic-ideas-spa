import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card.jsx";

function CardsContainer() {
    return (
        <div className="container p-3" style={{maxWidth: '80%'}}>
            {/* row-cols-md-3 значит "3 карточки в ряд на средних экранах" */}
            {/* g-4 добавляет красивые отступы (gap) между карточками */}
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
            </div>
        </div>
    );
}

export default CardsContainer;