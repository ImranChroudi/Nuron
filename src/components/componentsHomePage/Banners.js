import React from 'react'
import data from "../../Data/data.json"

const Banners = () => {

  console.log(data)

  const elementsBannersSm = data.bannersSm;
    const elementsBanners = data.banners;

  return (
    <div className='banners'>
       <div className='content justify-conetnt-between m-0 row w-100'>
           <div className='col-md-12 col-lg-4 col-xl-4 col-12  p-3 big__banner rounded'>
           <div id="carouselExampleIndicators" class="h-100 carousel slide">
  <div class="carousel-indicators">
    <button type="button" className='btn__carousel active' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
    <button type="button" className='btn__carousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" className='btn__carousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" className='btn__carousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>

  </div>
  <div class="carousel-inner h-100">

    {
      elementsBanners && elementsBanners.map((element , key)=>(
       <div className={key == 0 ? "carousel-item active h-100" : "carousel-item  h-100"}>
          <img src={element.img} class="d-block h-100 w-100" alt="..." />
      </div>
      ))
    }
    
    
  </div>
 
</div>
           </div>
           <div className='col-xl-8 col-12  banners__sm col-md-12 col-lg-8'>
               <div className='row cards'>

                  {elementsBannersSm && elementsBannersSm.map((element) => (
                    <div className=' col-sm-6 col-12 col-lg-4 col-xl-4 rounded banner p-2' >
                    <div className='card p-3'>
                         <div className='img h-auto rounded hover__scale w-100' >
                           <img className='w-100 h-100 tag__img' src={element.img} />
                           <div className='name__designer p-xl-2 '>
                              <p className='fs-xl-2 fs-md-6'>{element.name}</p>
                              <span>{element.designer}</span>
                           </div>
                         </div>
                    </div>
                   </div>
                  ))}


                  </div>
                  </div>
           </div>
    </div>
  )
}

export default Banners