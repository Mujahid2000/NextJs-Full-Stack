
import Banner from '@/app/Component/Banner';
import OrganicCotton from '@/app/Component/OrganicCotton';
import ProductCard from '@/app/Component/Product';
import Reviews from '@/app/Component/Reviews';
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