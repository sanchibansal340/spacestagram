import React, { useState } from 'react';
import MediaType from './MediaType';
import '../assets/styles/style.css';
import ReadMore from './ReadMore';

function ImageCard({image}) {
    const [like, setLike] = useState(false);
    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <main className="ImageCard mb-5">
            <section className="card col-lg-4 mx-auto">
                <figure>
                    {/* Figure out media type and display accordingly */}
                    <MediaType image={image} />
                    {/* Title, Caption and Like Button */}
                    <figcaption className="card-body my-auto"> 
                        <header className="d-flex">
                            <h4 className="card-title col-10">
                                {image.title}  
                            </h4>
                            {/* Like Button */}
                            <aside>
                                <button 
                                    className="btn-white btn-like"
                                    onClick={toggleLike}
                                    style={{
                                        fontSize: !like ? '2.3em' : '1.5em', 
                                        marginTop: !like ? '-0.4em' : '-0.2em',
                                        marginBottom: !like ? '-1em' : '0em',
                                    }}
                                >
                                    {like ? "\u2764" : "\u2661"}
                                </button>
                            </aside>
                            {/* Like Button ends */}
                        </header> 
                        {/* Caption */}
                        <article>
                            <ReadMore caption={image.explanation} />
                        </article>
                        {/* Caption ends */}
                    </figcaption>
                    {/* Title, Caption and Like Button ends */}
                </figure>
                {/* Date */}
                <footer className="card-footer">
                    <small className="text-muted">
                        Posted on {image.date}
                    </small>
                </footer>
                {/* Date ends */}
            </section>
        </main>
    )
}

export default ImageCard;
