'use client';
import Slider from 'react-slick';
import React from 'react';
import Image from 'next/image';

// CAROUSEL DATA

const postData = [
  {
    heading: 'Brand design for a social Media.',
    imgSrc: '/images/featured/feat3.jpg',
  },
  {
    heading: 'Brand design for Rohitash Singh.',
    imgSrc: '/images/featured/feat4.png',
  },
  {
    heading: 'Brand design for Sidharth.',
    imgSrc: '/images/featured/feat5.png',
  },
  {
    heading: 'Portfolio Brand.',
    imgSrc: '/images/featured/feat4.png',
  },
];

// CAROUSEL SETTINGS

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  );
}

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-bgblue py-20 marginFeature bg-featured">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center pt-48 pb-10 md:pt-96">
          <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Featured works.</h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Featured works.</h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Featured works.</h3>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl" />
                <div className="w-345">
                  <h4 className="sm:text-5xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white">
                    {items.heading}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
