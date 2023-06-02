'use client'
import React,{ useRef } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
 
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import LightGallery from "lightgallery/react/Lightgallery.es5";
import Masonry from 'react-masonry-css'
const Gallery = () => {
  const lightboxRef = useRef(null);
  const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
  const pohotos=["https://source.unsplash.com/RmIxQ05GzH0","https://source.unsplash.com/NSVJAAXOYHs","https://source.unsplash.com/efjNhdPEHj4","https://source.unsplash.com/MMNgGsFEbuI","https://source.unsplash.com/MMNgGsFEbuI","https://source.unsplash.com/sqWzP97H_bo"];
  return (
  <>
  <Masonry
  
  breakpointCols={3}
  gutter={4}
  className="my-masonry-grid  "
  columnClassName="my-masonry-grid_column"
  >
        {pohotos.map((photo, idx) => (
          <div className="relative" key={photo.src}>
            <img
              src={photo}
              style={{
                // height:`${4*heights[idx]}px`,
            display:'block',
          width:'100%'}}
              alt={photo}
              className="relative my-4"
              placeholder="blur"
              
            />
            <div
              className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            ></div>
          </div>
        ))}
        </Masonry>
        <LightGallery
         onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay]}
        dynamic
        dynamicEl={pohotos.map((photo) => ({
          src: photo,
          thumb:photo,
          
        }))}
      >
        {/* {pohotos.map((photo,idx)=>(
          <div key={idx}> <img
          src={photo}
          
          alt={photo}
          className="relative my-4"
          placeholder="blur"
          
        /></div>
        ))} */}
      </LightGallery>
  
  </>
    
     
    
  )
}

export default Gallery