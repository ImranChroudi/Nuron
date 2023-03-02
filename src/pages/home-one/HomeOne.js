import React from 'react'
import Banners from '../../components/componentsHomePage/Banners';
import CreatingNft from '../../components/componentsHomePage/CreatingNft';
import LiveBidding from '../../components/componentsHomePage/LiveBidding';
import ExploreProduct from '../../components/componentsHomePage/ExploreProduct';

import './HomeOne.css';


const HomeOne = ()=>{
    return (
        <div className='home__one w-100'>
            <div className='container  p-sm-0 '>
                  <Banners />
                  <LiveBidding timer={true} title={true}/>
                  <CreatingNft />
                  <ExploreProduct />
            </div>
        </div>
    )
}

export default HomeOne