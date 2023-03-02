import React , {useState} from 'react'
import data from '../../Data/data.json'
import  { Elements } from './LiveBidding'
import {AiOutlineArrowRight} from 'react-icons/ai'

const CreatingNft = () => {

  const [itemActive , setItemActive] = useState("All");

  const dataCards = data.sectionCreateNft;
  return (
    <div className='explore__product py-5'>
         <div className='content p-sm-0 px-2 w-100'>
             <div className='row justify-content-between w-100'>
               <div className='mb-5 col-12 col-md-6 title'>
                 <h1 className='text-white fw-bold'>Explore Product</h1>
               </div>

               <div className='col-12  col-md-6 justify-content-end'>
                    <div>
                         <ul className='d-flex menu__product p-0 justify-content-md-end  flex-wrap gap-2'>
                             {
                              ["All" , "Music" , "Video" ,"Art" , "Lowest" , "Highest" , "Collectionable"].map((item , key)=>(
                                <li onClick={()=>{setItemActive(item)}} className={itemActive === item ? 'border active' : 'border'}>{item}</li>
                              ))
                              }
                         </ul>
                    </div>
               </div>
             
             </div>

             <div className="live__bidding">
                <Elements timer={false} />
             </div>

            
         </div>
    </div>
  )
}

export default CreatingNft