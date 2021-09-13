import React, { useState } from 'react';

function ReadMore({ caption }) {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <main className="ReadMore card-text">
            <p className="caption">
                <span className="fw-bold">
                    Caption: 
                </span>
                {' '}
                {isReadMore ? caption.slice(0, 150) : caption}
                <button onClick={toggleReadMore} className="btn-white btn-read-hide fw-bold">
                    {isReadMore ? " ...Read More" : " ...Show Less"}
                </button>
            </p>
        </main>
    )
}

export default ReadMore;
