import React from 'react'

function MediaType({ image }) {
    return (
        <section className="MediaType">
            {image.media_type === "image" ? (
                <img
                    src={image.url}
                    alt={image.title}
                    className="card-img-top img-fluid"
                />
                ) : (
                <iframe
                    title={image.title}
                    src={image.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="card-img-top img-fluid"
                />
            )}
        </section>
    )
}

export default MediaType
