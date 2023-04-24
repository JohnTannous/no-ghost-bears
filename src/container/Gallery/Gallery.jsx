import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { photos } from './GalleryPhotos';
import './Gallery.css'

const Gallery = () => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight:'bold',
    
    
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="gallery-container">
      <div className='title'>
        <h1>Photo Gallery</h1>
        <div className='carousel_container'>
          <Carousel
            data={photos}
            time={2000}
            width="950px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="pink"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            className='carousel'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;