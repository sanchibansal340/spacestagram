import React from 'react';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ImageCard from '../components/ImageCard';
import useFetch from '../utils/useFetch';

function APOD() {
    const apiKey = process.env.REACT_APP_NASA_KEY;
    const { isLoaded, error, data } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`);
    const images = data;

    if (error) return <div>{error}</div>
    else if(!isLoaded) return (
        <Loading />
    )
    return (
        <main>
            <Navbar />
            <section className="AOTD container" style={{paddingTop: '7rem'}}>
                <div className="row">
                    {images.map(image => (
                        <ImageCard image={image} key={image.date} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default APOD;
