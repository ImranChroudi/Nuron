import React from 'react'
import data from '../../Data/data.json'
import {AiOutlineArrowRight} from 'react-icons/ai'

const CreatingNft = () => {

    const dataCards = data.sectionCreateNft;
  return (
    <div className='create__nft py-5'>
         <div className='content p-sm-0 px-2'>
             <div className='mb-5 title'>
               <h1 className='text-white fw-bold'>Create and sell your NFTs</h1>
           </div>
              <div className='row'>
                 {dataCards && dataCards.map((item)=>(
                    <div className='col-12 p-2 col-sm-6 col-md-4 col-xl-3'>
                         <div className='card rounded p-4 bg__color4'>
                           <div className='icon position-absolute'>
    <div className='img'>
       <img src={item.icon} />
    </div>
</div>
                            <div className='content__card'>


<div className='step'>
  <h4 className='font__16 color__2'>step-{item.step}</h4>
</div>

<div className='title__text'>
   <p className='m-0 mt-5  mb-3 p-0 font__18 fw-bold text-white title'>
       {item.title}
   </p>

   <p className='m-0 mb-4 p-0 color__2 font__16'>
      {item.text}
   </p>

</div>
<div className='btn__arrow mt-4'>
   <button>
        <AiOutlineArrowRight />
   </button>
   </div>
</div>
                         </div>
                    </div>
                 ))}
              </div>
         </div>
    </div>
  )
}

export default CreatingNft