
import Banner from '@/Component/Banner';
import OrganicCotton from '@/Component/OrganicCotton';
import ProductCard from '@/Component/Product';
import Reviews from '@/Component/Reviews';
import React from 'react';


const page = () => {
  return (
    <div className='mt-[3rem]'>
     <Banner/>
     <ProductCard/>
     <OrganicCotton/>
     <Reviews/>
    </div>
  );
};

export default page;