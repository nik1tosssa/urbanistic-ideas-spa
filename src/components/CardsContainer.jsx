import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UrbanisticIdeaCard from "./UrbanisticIdeaCard.jsx";

function CardsContainer({items}) {
    return (
        <div className="container p-3" style={{maxWidth: '75%'}}>
            {/* row-cols-md-3 значит "3 карточки в ряд на средних экранах" */}
            {/* g-4 добавляет красивые отступы (gap) между карточками */}
            <div style={{margin: "auto"}}>
                <div
                    className="d-flex flex-wrap justify-content-start gy-3 gx-3 row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
                    {items.map(idea => (
                        <UrbanisticIdeaCard key={idea.id} idea={idea}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;