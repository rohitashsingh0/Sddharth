'use client';
import Slider from 'react-slick';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPaginatedPosts } from 'lib/posts';

// CAROUSEL DATA
const postData = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article3.png',
  },
];

// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Articles = ({ posts }) => {
  console.log('posts', posts);
  return (
    <div className="bg-lightgrey py-20" id="blog-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
          <h3 className="text-4xl sm:text-6xl font-bold">Our latest post.</h3>
        </div>

        <Slider {...settings}>
          {postData.map((item, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                <Image src={item.imgSrc} alt="article image" width={389} height={262} className="inline-block m-auto" />

                <Link href="/">
                  <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
                    {item.time} read
                  </h3>
                </Link>
                <h4 className="text-2xl font-bold pt-6 text-black">{item.heading}</h4>
                <h4 className="text-2xl font-bold pt-1 text-black">{item.heading2}</h4>

                <div>
                  <h3 className="text-base font-normal pt-6 pb-2 opacity-75">{item.name}</h3>
                  <h3 className="text-base font-normal pb-1 opacity-75">{item.date}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Articles;

export async function getStaticProps() {
  const { posts } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  console.log('posts', posts);
  return {
    props: {
      posts,
    },
  };
}
